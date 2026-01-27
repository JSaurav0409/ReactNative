import { NewAppScreen } from '@react-native/new-app-screen';
import { JSX } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import type { PropsWithChildren } from 'react';

//1. Install npm i @react-navigation/native and @react-navigation/native-stack

//2. Import Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//3. Create and Import Screens
import Home from './screens/Home';
import Details from './screens/Details';

//4. Root stack parameter list for Type Checking and Type Safety
export type RootStackParamList = {
  Home: undefined;
  Details: { productId: string };
};

// 5. Creating Stack and using createNativeStackNavigator which is type of RootStackParamList for Type Checking abd Type Safety
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/*Initial page when app loads */}
        <Stack.Screen
          name="Home" // Name of the page
          component={Home} // Component attach to the page
          options={{
            title: 'Trending Products', // Title shown when the page change
          }}
        />
        <Stack.Screen
          name="Details" // Name of the page
          component={Details} // Component attach to the page
          options={{
            title: 'Products Details', // Title shown when the page change
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
