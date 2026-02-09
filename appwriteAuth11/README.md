# Using Appwrite for Authentication

## 1. Install Dependencies

    "react-native-config": "^1.6.1",
    "react-native-safe-area-context": "^5.6.2",
    "react-native-screens": "^4.20.0",
    "react-native-snackbar": "^2.9.0",
    "appwrite": "^21.5.0",
    "@react-native-vector-icons/fontisto": "^12.4.0",
    "@react-native/new-app-screen": "0.83.1",
    "@react-navigation/native": "^7.1.28",
    "@react-navigation/native-stack": "^7.11.0",
    "@rneui/base": "^5.0.0",
    "@rneui/themed": "^5.0.0",

## 2. Configuration

1. Create .env and .sample-env variable

- Adding couple of endpoint
  1.  APPWRITE_ENDPOINT=''
  2.  APPWRITE_PROJECT_ID=''

## 3. Folder Creation

- Create **src** folder on **root directory** and **appwrite** folder inside the **src** folder
- Create **service.ts** inside the appwrite folder.
  - In `service.ts` we will write logic to create **user account, login, getCurrentUserInfo and logout.**
- Create **AppwriteContext.tsx** inside the appwrite folder.
  - Here, we write appwrite **context** and **provider**
- Create a seperate folder known as **components** and add **Loader** Component here
- 
