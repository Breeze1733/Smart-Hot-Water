# 软件概况

  ### 1. 视图层交互 (UI Touch Event)

  • 用户触发：在 pages/index/index（洗浴页面）点击 “开启用水” 按钮。
  • 方法入口：触发 touchStart 事件函数，经基础防抖和状态判断后进入 touchEnd 方法。

  ### 2. 前置业务与身份校验 (Pre-checks)

  在发送开阀指令前，系统按顺序进行以下严格校验：

    1. 登录与实名校验：校验 userId 及用户是否完成实名认证（isRealName）。
    2. 授信金（押金）状态校验 (checkState)：
       • 检查 CashDepSatus：
           • 若处于退款申请中（状态为 1），拦截操作，提示“退款受理中，暂时无法使用洗浴”。
           • 若未缴纳授信金（状态非 2），自动跳转至授信金缴纳页面（pages/deposit/deposit）。

    3. 设备绑定校验：检查当前账号/房间是否绑定了设备 MAC 地址（device.deviceMac）。
    4. 待支付订单/欠费校验 (getIsArrearage)：校验用户是否有超额未支付的订单。

  ### 3. 蓝牙模块初始化 (Bluetooth Handshake)

  校验通过后，调用蓝牙模块 openBluetooth()：

    1. 权限申请：申请地理位置及蓝牙使用权限（scope.userLocation）。
    2. 启动蓝牙：调用微信 API wx.openBluetoothAdapter 初始化适配器。
    3. 设备搜索：调用 wx.startBluetoothDevicesDiscovery 扫描并匹配目标房间水控器的 MAC 地址。

  ### 4. 核心开关指令协议 (switching("开阀"))

  进入设备控制核心模块（C372FB5794FC...js 中的 switching）：

    [UI点击] -> [开关协议 switching("开阀")]
                   |
                   +---> [蓝牙链路 (主)] ---> P("1001") 握手连接
                   |                           ---> P("2004") 发送开阀指令
                   |                           ---> P("2005") 读取阀门开启确认
                   |
                   +---> [若蓝牙失败/超时] ---> [NB-IoT/4G 降级 (备用)]
                                                 ---> 发送 API 网络远程开阀请求
                                                 ---> 本地标记 nbOpen = 1

  • 蓝牙主链路（指令码序列 P()）：

         1. P("1001")：与水控器蓝牙建立 GATT 连接并握手。
             P("2004")：向水控硬件发送加密的开阀启动指令（包含用户密钥与水控配置）。
                     3. P("2005")：读取水控器返回的状态包，确认阀门已物理开启。
                        • 网络降级备用链路 (NB-IoT/4G)：
                              • 若蓝牙连接超时、距离过远或蓝牙开阀失败，触发 catch 捕获异常；
                              • 如果设备支持 NB/4G，会自动降级调用后端 RESTful API 向服务器发送远程开阀指令，并在本地记录 nbOpen: 1 状态。

  ### 5. 硬件出水与页面 UI 响应

  • 水控器开阀：水控器电磁阀打开，开始供水并进入计费/计时状态。
  • 界面更新：
      • 按钮状态切换为 “关闭用水”（btnVal: "on"）。
      • 弹出倒计时提示（“小蓝已准备好了”）。
      • 本地缓存保存 switchStatus 记录，防止中途退出小程序导致开关状态丢失。



# 加密协议浏览

  ### 一、 校验和计算规则（Checksum 累加和算法）

  在协议中，校验码是用数据段的十进制字节累加和对 256 求余得出的。

  #### 代码提取逻辑（JavaScript）：

    /**
     * 校验和计算规则 (固定算法)
     * @param {string} hexStr - 需计算校验和的十六进制数据串
     * @returns {string} 2位大写十六进制校验码
     */
    function calculateChecksum(hexStr) {
        let total = 0;
        // 每 2 个十六进制字符作为一个 Byte 进行累加
        for (let i = 0; i < hexStr.length; i += 2) {
            let byteValue = parseInt(hexStr.substr(i, 2), 16);
            total += byteValue;
        }
        // 对 256 求余并转为 2 位大写 16 进制
        let checksum = (total % 256).toString(16).toUpperCase();
        return checksum.length === 1 ? '0' + checksum : checksum;
    }

  ### 二、 硬件标识转换规则 (Device MAC Byte Array)

  对于华南理工大学某房水控设备（MAC/序列号为 00815510724116），在代码中固定转换为 7 字节数组：

  • 输入格式：字符串 "00815510724116"
  • 固定转换规则：按每 2 个字符作为一个 Byte 拆分：

    Byte Array = big [texttt0x00, texttt0x81, texttt0x55, texttt0x10, texttt0x72, texttt0x41, texttt0x16big]

  ### 三、 数据帧基础结构拼接规则 (Frame Assembly)

  代码中针对开阀/关阀操作的固定数据帧骨架拼接规则如下：

    // 1. 固定包头与标识
    const HEADER = "681C6811";
    const DEVICE_MAC = "00815510724116";
    
    // 2. 固定操作码
    const CMD_OPEN  = "00F10000"; // 开阀指令码
    const CMD_CLOSE = "00F10001"; // 关阀指令码
    
    // 3. 固定包尾
    const TAIL = "16";
    
    // 数据帧拼装骨架逻辑:
    // [HEADER] + [DEVICE_MAC] + [CMD] + [动态Payload] + [CHECKSUM] + [TAIL]

  ### 总结

  以上三条规则（1. 字节累加和求余算法、2. MAC 字节拆解规则、3. 帧骨架拼接逻辑）在小程序源码中是完全固定且硬编码的，对该设备的所有控制通信均遵循这套规则。