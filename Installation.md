# Installation Requirements for React Native.

## Core Prerequisites are :

To set up a React Native development environment, ensure the following technologies are installed:

- Node JS (LTS preferred)
- Java (LTS preferred)

### Setup on Windows

1. Code Editor

   - VS Code

2. Java

   - Install OpenJDK (LTS)

3. Android Development
   - Install Android Studio
     - Configure SDK Manager
     - Install Android SDK Platform (Choose latest and one generation older SDK) & Build Tools
     - Set up AVD (Android Virtual Device) if needed

### Setup on macOS

1. Code Editor

   - VS Code

2. Java

   - Install OpenJDK (LTS)

3. Android Studio

   - Install Android Studio
     - Configure SDK Manager
     - Install Android SDK Platform (Choose current and one generation older SDK) & Build Tools

4. iOS Development
   - Install Xcode
     - Includes iOS Simulator
     - Requires macOS

---

## Setting Up PATH Variables on Windows

### User-level and System-level setup — directory paths will vary by device

- Node.js:
  - `C:\Program Files\nodejs\`
- Java (JAVA_HOME)

  - `C:\Program Files\Java\jdk-23\`

- Android

  - SDK :

    - `C:\Users\Dell\AppData\Local\Android\Sdk`

  - Platform Tools :

    - `C:\Users\Dell\AppData\Local\Android\Sdk\platform-tools`

  - Emulator

    - `C:\Users\Dell\AppData\Local\Android\Sdk\emulator`

  - Tools
    - Bin : `C:\Users\Dell\AppData\Local\Android\Sdk\tools\bin`
    - Tools : `C:\Users\Dell\AppData\Local\Android\Sdk\tools\bin`

---

## Creating a new React-Native Project

- Code to create a new react-native file

  - `npx @react-native-community/cli init appname`

- Code to run this project on `android` device.
  - For Emulator : `npx react-native run-android`
  - For Physical Device : `npx react-native run-android --device=device id`
    - for example : `npx react-native run-android --device=deviceID` 
    - **Run the above code on app file**

**NOTE: React Native does not auto-generate this file when SDK paths are missing. You must create it manually**

Project/ android / local.properties <- Create this file here

**sdk.dir=C:\\Users\\Dell\\AppData\\Local\\Android\\Sdk**
