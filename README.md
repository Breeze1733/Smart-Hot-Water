# Smart-Hot-Water

## 目录结构说明

```text
Smart-Hot-Water
├── README.md
├── raw/                                  # 参考与备份
│   ├── app-service.js                    # 原版源码备份
│   ├── test.js                           # 全量逻辑调试脚本
│   └── analyse.md                        # 分析笔记
└── android/                              # Android 12+ 原生 App 工程
    ├── build.gradle                      # Gradle 根构建配置
    ├── settings.gradle                   # Gradle 项目模块设置文件
    ├── gradle.properties                 # Gradle 属性配置文件 (启用 AndroidX)
    ├── gradlew.bat                       # Windows Gradle 批处理脚本
    └── app/
        ├── build.gradle                  # 应用 Module 构建配置
        └── src/main/
            ├── AndroidManifest.xml        # Android 12+ 蓝牙权限配置
            ├── assets/                   # WebView 加载的静态资源
            │   ├── index.html            # 控水界面
            │   └── light.js              # 核心逻辑脚本
            └── java/com/example/smartwater/
                ├── MainActivity.java      # 主界面 Activity
                └── NativeBleBridge.java   # 原生 BLE GATT 适配器
```

---

## 构建 APK 指令 (Windows)

```powershell
# 切换到 android 目录并编译 Debug 版本 APK
cd android
.\gradlew.bat assembleDebug
```

生成 APK 文件输出路径：
`android/app/build/outputs/apk/debug/app-debug.apk`

---

## License

本项目仅仅提供调试思路，如果学习者实际下载部署出现问题，本项目开发者一律不负责，与本人无关。
