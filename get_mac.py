import uuid
import requests

phone = input("请输入手机号: ").strip()
password = input("请输入密码: ").strip()

# 1. 动态生成一个随机设备 UUID（模拟真实手机客户端）
device_uuid = str(uuid.uuid4())

# 2. 发送登录请求（填入伪造数据和生成的 device_uuid）
login_url = "https://hwsmart.gzuci.com/api/users/WXWebLogon"
payload = {
    "phone": phone,
    "LoginPwd": password,
    "LoginWay": "userPwdWx",
    "sessionKey": "dummy_session_key",  # 填入伪造占位符
    "openId": f"mock_openid_{phone}",   # 填入伪造占位符
    "uuid": device_uuid,                # 必须带上生成的 UUID
    "botId": "",
}

try:
    print("\n[1] 正在登录并注册临时设备会话...")
    res = requests.post(login_url, data=payload)
    login_data = res.json()

    print("[调试] 登录接口返回原文:")
    print(login_data)

    # 提取 UserID
    user_id = login_data.get("UserID") or login_data.get("userID")

    if not user_id:
        print("\n[错误] 登录失败或密码错误，未能获取 UserID。")
    else:
        print(f"\n[成功] 提取到 UserID: {user_id}")

        # 3. 请求 UserStatusInfo 接口（必须带上前面登录用的同一个 device_uuid）
        status_url = "https://hwsmart.gzuci.com/api/users/UserStatusInfo"
        params = {
            "userID": user_id,
            "uuid": device_uuid  # 保持与登录时的 uuid 一致
        }

        print("\n[2] 正在获取设备状态及 Mac...")
        status_res = requests.get(status_url, params=params)
        status_data = status_res.json()

        print("[调试] 状态接口返回原文:")
        print(status_data)

        # 4. 提取 Mac 字段
        mac = status_data.get("Mac")

        if mac:
            print("\n" + "=" * 35)
            print(f" 最终成功获取到的 Mac 地址: {mac}")
            print("=" * 35)
        else:
            print("\n[错误] 未能成功获取到 Mac 地址，请检查状态接口响应。")

        pause = input("\n按回车键退出...")
        if pause == "":
            print("退出程序。")

except Exception as e:
    print(f"\n[异常] 执行过程报错: {e}")