import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';

export default function FlatCards() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <Text
        style={[
          styles.headingText,
          isDarkMode ? styles.whiteText : styles.darkText,
        ]}
      >
        Flat Cards
      </Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.whiteText}>RED</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.whiteText}>Green</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.whiteText}>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },

  whiteText: {
    color: '#ffffff',
  },

  darkText: {
    color: '#000000', // FIXED
  },

  container: {
    flexDirection: 'row',
    padding: 8,
  },

  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 25,
    margin: 15,
  },

  cardOne: {
    backgroundColor: '#f14848ff',
  },
  cardTwo: {
    backgroundColor: '#33e44aff',
  },
  cardThree: {
    backgroundColor: '#1c8fecff',
  },
});
