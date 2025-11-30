# Project02 — React Native UI

## Flat Cards.

- A simple React Native project demonstrating how to build flat card components using Flexbox, custom styles, and reusable UI patterns.

**🚀 Features:**

- Safe area support using `react-native-safe-area-context`
- Scrollable layout using `ScrollView`
- Custom “Flat Cards” UI with flexible styling
- Clean, modular component structure

```bash
Project02
│
├── App.tsx
└── components
    └── FlatCards.tsx

```

**App.txs:** This is the main entry component that wraps the UI inside SafeAreaView and enables vertical scrolling with ScrollView.

```tsx
import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatCards from './components/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
```

**What's happening here ?**

- `SafeAreaView` keeps content within phone-safe boundaries.
- `ScrollView` allows smooth vertical scrolling.
- FlatCards is imported as a modular UI component.

**🎨 Component: FlatCards.tsx**

```tsx
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={[styles.headingText, styles.whiteText]}>Flat Cards</Text>
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

  container: {
    flex: 1,
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
```

**📝 Component Breakdown**

**1. Heading**

A simple text heading styled with:

- Large font size
- Bold weight
- Horizontal padding

**2. Card Container**
Uses Flexbox with:

- flexDirection: 'row' to align items horizontally.
- Even spacing and padding.

**3. Cards:**
Each card:

- Has equal size (100×100).
- Is centered using `justifyContent` and `alignItems`.
- Has rounded corners (`borderRadius: 25`)
- Has its own background color

## 🎯Learning Outcomes

After completing Project02, you will understand:

- How to create custom UI components
- How to style components using StyleSheet
- How to use Flexbox for layout in React Native
- How to structure components cleanly
