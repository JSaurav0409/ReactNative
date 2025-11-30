import React from 'react';
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
