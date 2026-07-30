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
 * JSBridge 原生蓝牙代理类 (带控制台链路日志诊断功能)
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

    private void logToJs(String msg, String type) {
        if (msg == null) msg = "";
        final String finalMsg = msg;
        if (webView != null) {
            webView.post(() -> {
                try {
                    String escaped = finalMsg.replace("\\", "\\\\")
                                        .replace("'", "\\'")
                                        .replace("\r", "")
                                        .replace("\n", " ");
                    webView.evaluateJavascript(
                        "javascript:if(window.logToConsole){ window.logToConsole('" + escaped + "', '" + type + "'); }",
                        null
                    );
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });
        }
    }

    @JavascriptInterface
    public void init() {}

    @JavascriptInterface
    public void saveMac(String mac) {
        try {
            SharedPreferences prefs = context.getSharedPreferences("smart_water", Context.MODE_PRIVATE);
            prefs.edit().putString("myMac", mac).commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @JavascriptInterface
    public String loadMac() {
        try {
            SharedPreferences prefs = context.getSharedPreferences("smart_water", Context.MODE_PRIVATE);
            return prefs.getString("myMac", "");
        } catch (Exception e) {
            return "";
        }
    }

    @JavascriptInterface
    public void connect(String paramsJson) {
        try {
            JSONObject json = new JSONObject(paramsJson);
            String targetMac = json.optString("mac", "");
            logToJs("[Android BLE] 收到连接指令，目标 MAC: " + targetMac, "info");

            disconnect("");

            if (bluetoothAdapter == null || !bluetoothAdapter.isEnabled()) {
                logToJs("[Android BLE Error] 手机蓝牙未开启或不支持蓝牙！", "error");
                return;
            }

            BluetoothLeScanner scanner = bluetoothAdapter.getBluetoothLeScanner();
            if (scanner == null) {
                logToJs("[Android BLE Error] 获取 BluetoothLeScanner 失败！", "error");
                return;
            }

            ScanCallback scanCallback = new ScanCallback() {
                @Override
                public void onScanResult(int callbackType, ScanResult result) {
                    if (result == null) return;
                    BluetoothDevice device = result.getDevice();
                    if (device == null) return;
                    String name = device.getName();
                    String address = device.getAddress();
                    if ((name != null && name.contains(targetMac)) || (address != null && address.equals(targetMac))) {
                        scanner.stopScan(this);
                        logToJs("[Android BLE] 匹配到设备: " + name + " [" + address + "]，发起 GATT 连接...", "info");
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                            bluetoothGatt = device.connectGatt(context, false, gattCallback, BluetoothDevice.TRANSPORT_LE, BluetoothDevice.PHY_LE_1M, null);
                        } else {
                            bluetoothGatt = device.connectGatt(context, false, gattCallback, BluetoothDevice.TRANSPORT_LE);
                        }
                    }
                }

                @Override
                public void onScanFailed(int errorCode) {
                    logToJs("[Android BLE Error] 蓝牙扫描失败, errorCode: " + errorCode, "error");
                }
            };

            logToJs("[Android BLE] 开始扫描周边 BLE 广播...", "info");
            scanner.startScan(scanCallback);
        } catch (Exception e) {
            logToJs("[Android BLE Error] connect 发生异常: " + e.getMessage(), "error");
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
                logToJs("[Android BLE Write] 向特征值 " + WRITE_UUID + " 写入 Hex: " + hexData, "ble");
                byte[] bytes = hexToBytes(hexData);
                boolean success;
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                    int res = bluetoothGatt.writeCharacteristic(writeCharacteristic, bytes, BluetoothGattCharacteristic.WRITE_TYPE_DEFAULT);
                    success = (res == BluetoothStatusCodes.SUCCESS);
                } else {
                    writeCharacteristic.setValue(bytes);
                    success = bluetoothGatt.writeCharacteristic(writeCharacteristic);
                }
                if (!success) {
                    logToJs("[Android BLE Error] writeCharacteristic 接口返回 false，写入可能失败", "warn");
                }
            } catch (Exception e) {
                logToJs("[Android BLE Error] write 异常: " + e.getMessage(), "error");
                e.printStackTrace();
            }
        } else {
            logToJs("[Android BLE Error] write 失败: gatt 或 writeCharacteristic 未就绪", "error");
        }
    }

    @JavascriptInterface
    public void disconnect(String deviceId) {
        if (bluetoothGatt != null) {
            logToJs("[Android BLE] 关闭 GATT 连接", "warn");
            try { bluetoothGatt.disconnect(); } catch (Exception e) {}
            try { bluetoothGatt.close(); } catch (Exception e) {}
            bluetoothGatt = null;
            writeCharacteristic = null;
        }
    }

    @SuppressWarnings("deprecation")
    private final BluetoothGattCallback gattCallback = new BluetoothGattCallback() {
        @Override
        public void onConnectionStateChange(BluetoothGatt gatt, int status, int newState) {
            if (status != BluetoothGatt.GATT_SUCCESS) {
                logToJs("[Android BLE Error] GATT 连接状态状态码异常: status=" + status + ", newState=" + newState, "error");
            }
            if (newState == BluetoothProfile.STATE_CONNECTED) {
                logToJs("[Android BLE] GATT 连接成功，开始 discoverServices...", "info");
                gatt.discoverServices();
            } else if (newState == BluetoothProfile.STATE_DISCONNECTED) {
                logToJs("[Android BLE Warning] GATT 已断开连接", "warn");
            }
        }

        @Override
        public void onServicesDiscovered(BluetoothGatt gatt, int status) {
            if (status == BluetoothGatt.GATT_SUCCESS) {
                logToJs("[Android BLE] 服务发现成功，分析设备服务列表...", "info");
                List<BluetoothGattService> services = gatt.getServices();
                if (services == null || services.isEmpty()) {
                    logToJs("[Android BLE Error] 设备未暴露任何 GATT 服务！", "error");
                    return;
                }

                BluetoothGattService targetService = null;
                BluetoothGattCharacteristic targetWriteChar = null;
                BluetoothGattCharacteristic targetNotifyChar = null;

                StringBuilder sbServices = new StringBuilder();

                for (BluetoothGattService s : services) {
                    String sUuid = s.getUuid().toString().toLowerCase();
                    if (sUuid.length() >= 8) {
                        sbServices.append(sUuid.substring(0, 8)).append(" | ");
                    } else {
                        sbServices.append(sUuid).append(" | ");
                    }

                    if (sUuid.contains("fee7") || sUuid.contains("ffe0") || sUuid.contains("fee0") || targetService == null) {
                        BluetoothGattCharacteristic writeC = null;
                        BluetoothGattCharacteristic notifyC = null;

                        for (BluetoothGattCharacteristic c : s.getCharacteristics()) {
                            String cUuid = c.getUuid().toString().toLowerCase();
                            int props = c.getProperties();

                            if (cUuid.contains("36f6") || (props & (BluetoothGattCharacteristic.PROPERTY_WRITE | BluetoothGattCharacteristic.PROPERTY_WRITE_NO_RESPONSE)) != 0) {
                                if (writeC == null || cUuid.contains("36f6")) writeC = c;
                            }
                            if (cUuid.contains("36f5") || (props & (BluetoothGattCharacteristic.PROPERTY_NOTIFY | BluetoothGattCharacteristic.PROPERTY_INDICATE)) != 0) {
                                if (notifyC == null || cUuid.contains("36f5")) notifyC = c;
                            }
                        }

                        if (writeC != null && notifyC != null) {
                            targetService = s;
                            targetWriteChar = writeC;
                            targetNotifyChar = notifyC;
                            if (sUuid.contains("fee7")) break;
                        }
                    }
                }

                logToJs("[Android BLE] 发现的全部服务列表: " + sbServices.toString(), "info");

                if (targetService != null && targetWriteChar != null && targetNotifyChar != null) {
                    this.writeCharacteristic = targetWriteChar;
                    String serviceUuidShort = targetService.getUuid().toString();
                    String writeUuidShort = targetWriteChar.getUuid().toString();
                    String notifyUuidShort = targetNotifyChar.getUuid().toString();

                    logToJs("[Android BLE] 匹配到有效服务: " + serviceUuidShort + " (Write: " + writeUuidShort + ", Notify: " + notifyUuidShort + ")", "success");

                    gatt.setCharacteristicNotification(targetNotifyChar, true);
                    BluetoothGattDescriptor descriptor = targetNotifyChar.getDescriptor(
                            UUID.fromString("00002902-0000-1000-8000-00805f9b34fb"));
                    if (descriptor != null) {
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                            gatt.writeDescriptor(descriptor, BluetoothGattDescriptor.ENABLE_NOTIFICATION_VALUE);
                        } else {
                            descriptor.setValue(BluetoothGattDescriptor.ENABLE_NOTIFICATION_VALUE);
                            gatt.writeDescriptor(descriptor);
                        }
                        logToJs("[Android BLE] Notify 描述符 2902 写入完毕，数据通道就绪！", "success");
                    } else {
                        logToJs("[Android BLE Warning] 描述符 2902 未找到，已直接使能 Notify 通知", "warn");
                    }
                } else {
                    logToJs("[Android BLE Error] 未能从该设备找到同时具备 Write 和 Notify 的特征通道！", "error");
                }
            } else {
                logToJs("[Android BLE Error] 发现服务失败, status=" + status, "error");
            }
        }

        @Override
        public void onCharacteristicChanged(BluetoothGatt gatt, BluetoothGattCharacteristic characteristic, byte[] value) {
            handleNotify(value);
        }

        @Override
        public void onCharacteristicChanged(BluetoothGatt gatt, BluetoothGattCharacteristic characteristic) {
            if (characteristic != null) {
                handleNotify(characteristic.getValue());
            }
        }

        private void handleNotify(byte[] value) {
            if (value == null) return;
            String hexStr = bytesToHex(value);
            logToJs("[Android BLE Notify Raw] 硬件底层接收 Notify 原始 Hex: " + hexStr, "ble");
            webView.post(() -> {
                try {
                    webView.evaluateJavascript(
                        "javascript:if(window.AppNativeBle && window.AppNativeBle.notifyData){ window.AppNativeBle.notifyData('" + hexStr + "'); }",
                        null
                    );
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });
        }
    };

    private byte[] hexToBytes(String s) {
        if (s == null) return new byte[0];
        int len = s.length();
        byte[] data = new byte[len / 2];
        for (int i = 0; i < len; i += 2) {
            data[i / 2] = (byte) ((Character.digit(s.charAt(i), 16) << 4)
                                 + Character.digit(s.charAt(i+1), 16));
        }
        return data;
    }

    private String bytesToHex(byte[] bytes) {
        if (bytes == null) return "";
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02X", b));
        }
        return sb.toString();
    }
}
