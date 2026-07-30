package com.example.smartwater;

import android.annotation.SuppressLint;
import android.bluetooth.*;
import android.bluetooth.le.BluetoothLeScanner;
import android.bluetooth.le.ScanCallback;
import android.bluetooth.le.ScanResult;
import android.content.Context;
import android.content.SharedPreferences;
import android.os.Build;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import org.json.JSONObject;
import java.util.UUID;

/**
 * JSBridge 原生蓝牙代理类 (极简纯净版)
 */
@SuppressLint("MissingPermission")
public class NativeBleBridge {

    private final Context context;
    private final WebView webView;
    private BluetoothAdapter bluetoothAdapter;
    private BluetoothGatt bluetoothGatt;
    private BluetoothGattCharacteristic writeCharacteristic;

    private static final UUID SERVICE_UUID = UUID.fromString("0000fee7-0000-1000-8000-00805f9b34fb");
    private static final UUID NOTIFY_UUID  = UUID.fromString("000036f5-0000-1000-8000-00805f9b34fb");
    private static final UUID WRITE_UUID   = UUID.fromString("000036f6-0000-1000-8000-00805f9b34fb");

    public NativeBleBridge(Context context, WebView webView) {
        this.context = context;
        this.webView = webView;
        BluetoothManager manager = (BluetoothManager) context.getSystemService(Context.BLUETOOTH_SERVICE);
        if (manager != null) {
            this.bluetoothAdapter = manager.getAdapter();
        }
    }

    @JavascriptInterface
    public void init() {}

    @JavascriptInterface
    public void saveMac(String mac) {
        SharedPreferences prefs = context.getSharedPreferences("smart_water", Context.MODE_PRIVATE);
        prefs.edit().putString("myMac", mac).commit();
    }

    @JavascriptInterface
    public String loadMac() {
        SharedPreferences prefs = context.getSharedPreferences("smart_water", Context.MODE_PRIVATE);
        return prefs.getString("myMac", "");
    }

    @JavascriptInterface
    public void connect(String paramsJson) {
        try {
            JSONObject json = new JSONObject(paramsJson);
            String targetMac = json.optString("mac", "");

            disconnect("");

            BluetoothLeScanner scanner = bluetoothAdapter.getBluetoothLeScanner();
            if (scanner == null) {
                return;
            }

            ScanCallback scanCallback = new ScanCallback() {
                @Override
                public void onScanResult(int callbackType, ScanResult result) {
                    BluetoothDevice device = result.getDevice();
                    String name = device.getName();
                    String address = device.getAddress();
                    if ((name != null && name.contains(targetMac)) || (address != null && address.equals(targetMac))) {
                        scanner.stopScan(this);
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                            bluetoothGatt = device.connectGatt(context, false, gattCallback, BluetoothDevice.TRANSPORT_LE, BluetoothDevice.PHY_LE_1M, null);
                        } else {
                            bluetoothGatt = device.connectGatt(context, false, gattCallback, BluetoothDevice.TRANSPORT_LE);
                        }
                    }
                }
            };

            scanner.startScan(scanCallback);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @SuppressWarnings("deprecation")
    @JavascriptInterface
    public void write(String paramsJson) {
        if (bluetoothGatt != null && writeCharacteristic != null) {
            try {
                JSONObject json = new JSONObject(paramsJson);
                String hexData = json.optString("value");
                byte[] bytes = hexToBytes(hexData);
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                    bluetoothGatt.writeCharacteristic(writeCharacteristic, bytes, BluetoothGattCharacteristic.WRITE_TYPE_DEFAULT);
                } else {
                    writeCharacteristic.setValue(bytes);
                    bluetoothGatt.writeCharacteristic(writeCharacteristic);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    @JavascriptInterface
    public void disconnect(String deviceId) {
        if (bluetoothGatt != null) {
            bluetoothGatt.disconnect();
            bluetoothGatt.close();
            bluetoothGatt = null;
        }
    }

    @SuppressWarnings("deprecation")
    private final BluetoothGattCallback gattCallback = new BluetoothGattCallback() {
        @Override
        public void onConnectionStateChange(BluetoothGatt gatt, int status, int newState) {
            if (newState == BluetoothProfile.STATE_CONNECTED) {
                gatt.discoverServices();
            }
        }

        @Override
        public void onServicesDiscovered(BluetoothGatt gatt, int status) {
            if (status == BluetoothGatt.GATT_SUCCESS) {
                BluetoothGattService service = gatt.getService(SERVICE_UUID);
                if (service != null) {
                    writeCharacteristic = service.getCharacteristic(WRITE_UUID);
                    BluetoothGattCharacteristic notifyChar = service.getCharacteristic(NOTIFY_UUID);

                    if (notifyChar != null) {
                        gatt.setCharacteristicNotification(notifyChar, true);
                        BluetoothGattDescriptor descriptor = notifyChar.getDescriptor(
                                UUID.fromString("00002902-0000-1000-8000-00805f9b34fb"));
                        if (descriptor != null) {
                            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                                gatt.writeDescriptor(descriptor, BluetoothGattDescriptor.ENABLE_NOTIFICATION_VALUE);
                            } else {
                                descriptor.setValue(BluetoothGattDescriptor.ENABLE_NOTIFICATION_VALUE);
                                gatt.writeDescriptor(descriptor);
                            }
                        }
                    }
                }
            }
        }

        @Override
        public void onCharacteristicChanged(BluetoothGatt gatt, BluetoothGattCharacteristic characteristic, byte[] value) {
            handleNotify(value);
        }

        @Override
        public void onCharacteristicChanged(BluetoothGatt gatt, BluetoothGattCharacteristic characteristic) {
            handleNotify(characteristic.getValue());
        }

        private void handleNotify(byte[] value) {
            String hexStr = bytesToHex(value);
            webView.post(() -> webView.evaluateJavascript(
                "javascript:if(window.AppNativeBle && window.AppNativeBle.notifyData){ window.AppNativeBle.notifyData('" + hexStr + "'); }",
                null
            ));
        }
    };

    private byte[] hexToBytes(String s) {
        int len = s.length();
        byte[] data = new byte[len / 2];
        for (int i = 0; i < len; i += 2) {
            data[i / 2] = (byte) ((Character.digit(s.charAt(i), 16) << 4)
                                 + Character.digit(s.charAt(i+1), 16));
        }
        return data;
    }

    private String bytesToHex(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02X", b));
        }
        return sb.toString();
    }
}
