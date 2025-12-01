import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>More....</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😊</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },

  container: {
    padding: 8,
  },

  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 10,
  },

  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 8, // Adds Android elevation, creating a raised card effect
    shadowOffset: {
      width: 1,
      height: 1,
    }, // Controls the shadow's direction and position (iOS)
    shadowColor: '#234', // Defines the shadow color (iOS)
    shadowOpacity: 0.6, // Controls how transparent or dark the shadow appears, ranges between 0 - 1 (iOS)
    shadowRadius: 2, // Sets how soft or spread out the shadow edges are (iOS)
  },
});
