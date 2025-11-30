## Understanding the File Structure

1. _test_ :

   - Contains test files written for validating app functionality.
   - React Native templates often include TypeScript-based test files by default.

2. android :

   - Holds all Android-specific source code, build files, and dependencies.
   - Includes Gradle configuration, native modules, and the Android app entry point.

3. ios :

   - Contains iOS-specific project files, native code, and dependencies.
   - Includes Xcode workspace, build settings, and iOS app entry point.
   - We do major touching here is only the pod file, which consists all of the dependencies and packages etc.

4. local.properties :

   - Required for Android builds to locate the Android SDK.
   - You can:
     - Set your SDK path globally using the ANDROID_HOME environment variable.
     - Set your SDK path globally using the ANDROID_HOME environment variable.
   - **IMPORTANT: This file is essential for building your Android app successfully.**

5. node_modules :

   - A lot of dependecies are install here in the node modules,
   - In case if there are any issues remove this file and re-install it using `npm i` or `npm install`.
   - This will re-install the node_modules file.

6. .gitignore :

   - It uses to ignore the file which makes the IDE to ignores the files to push in Github.

7. .prettierrc.js :

   - This file is for the ease of developer, this make code allignment proper.

8. .watchmanconfig :

   - It is the simple tool which reupdate UI of the app.

9. app.json:

   - This is the major configuration file, android and iOS take name of the file from here.

10. App.tsx:

    - This is the files which bring everything on the screen.

11. babel.config.js:

    - It is a bundler which combine all other file and make it available and runnable for browser and mobile device.

12. Gemfile:

    - It is a ruby base file contains `cocoapods` which mainly use for iOS development.

13. index.js:

    - This is the file which bundlers open first.

14. metro.config.js:

    - We will never going to change it, it is a bundler which help us to do all the tasks.

15. tsconfig.json:

    - It is a typescript configuration file.

16. package.json:

    - It stores dependencies,dev dependencies and scripts.

---

```js
/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import AppPro from './AppPro';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppPro);
```

**Explanation:**

- `AppRegistry` is the entry point of every React Native application and is responsible for registering the root component.
- The file imports `AppPro` and registers it as the main component instead of the default `App`.
- `appName` is imported from `app.json` and used as the identifier for the application.
- `AppRegistry.registerComponent(appName, () => AppPro)` ensures that `AppPro` becomes the first screen the app loads.
- This setup allows you to easily switch between different root components during development by changing the import.

---

```javascript import React from 'react';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { Text, View, Button } from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World !</Text>
        <Text>Hello World !</Text>
        <Text>Hello World !</Text>
        <Button title="click me!" color="green" />
      </View>
    </SafeAreaView>
  );
}

export default App;
```

**Explanation:**

- The component is wrapped with SafeAreaView, ensuring content stays within safe display boundaries on modern devices.

- The View groups UI elements together.

- Multiple Text components display simple messages.

- A Button component renders an interactive button with a title and color.

---

- Create a file in the root directory and name it whatever you want, here we are naming it **AppPro.tsx**

```javascript
import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#000000' : '#ffffff' },
      ]}
    >
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World !
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // move content left and right
    justifyContent: 'center', // move content top and bottom
  },
  whiteText: {
    color: '#ffffff',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;
```

**Explanation:**

- The component detects the device’s theme using `useColorScheme()` and adjusts colors for light or dark mode.
- `SafeAreaView` ensures the UI stays within safe boundaries on devices with notches or curved edges.
- A centered container (`flex: 1`, `alignItems: 'center'`, `justifyContent: 'center'`) places content neatly in the middle of the screen.
- Text color switches dynamically based on the current theme for a clean, adaptive UI.
- The component structure is simple, readable, and demonstrates how to build a theme-responsive screen in React Native.

---

## Summary

**Key Takeaways:**

1. Installed and set up all the necessary tools for React Native development.
2. Prepared a ready-to-run environment for building mobile applications.
3. Learned the basics, including file structure, components, styling, and successfully ran a simple "Hello World!" app on a physical device.
4. Explored and modified components slightly to understand their behavior and how they render on the device.
