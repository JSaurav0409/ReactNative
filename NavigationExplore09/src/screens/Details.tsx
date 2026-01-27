import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Their are multiple way of doing same thing in JS and its Library/Framework
// Here we are using hook for navigation which is different from what we used in Home.tsx
// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// Type Safety
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({ route }: DetailsProps) => {
  const { productId } = route.params;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details:{productId}</Text>
      <Button
        title="Go to Home"
        // Directly Navigate to Home Page using .navigate method
        // onPress={() => navigation.navigate("Home")}

        // Altough we can use this method in this project to move on Home Page as we have only two page here but the main work of .goback() is just getting one page back
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go Back to First Screen"
        // pop(2) use to remove the page from stack of screens and we provide how many page we want to go back
        // onPress={()=> navigation.pop(2)}

        // popToTop() we use this funtion to move to the top element of the screen stack
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallText: {
    color: '#000',
  },
});
