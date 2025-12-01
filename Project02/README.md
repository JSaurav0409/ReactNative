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

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
}

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

After completing Flat Cards part, we will understand:

- How to create custom UI components
- How to style components using StyleSheet
- How to use Flexbox for layout in React Native
- How to structure components cleanly

---

## 🎴 ElevatedCards Component

- `ElevatedCards` demonstrates how to create horizontally scrollable cards with elevation (shadow), giving your UI a lifted, modern look.

```js
// Create ElevatedCards.tsx in components folder

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
```

**Explanation:**

- **Heading :**

  - Displays the title "Elevated Cards" with bold styling.

- **Horizontal Scroll :**
  - Enables smooth left-to-right scrolling.
  - Ideal for cards, categories, tags, and suggestions UI.
  - ```tsx
    <ScrollView horizontal={true}>
    ```
- **Cards :**

  - Square (100×100)
  - Center-aligned
  - Slightly rounded (borderRadius: 10)
  - Styled with a light background color
  - Given elevation to create a shadow (Android)
  - ```tsx
    elevation: 8;
    ```

**🧩 Updated App.tsx**

```tsx
import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards /> // Imported ElevatedCards from components
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
```

## 🎯 What You Learned

- How to implement horizontal scrolling in React Native.

- How to create reusable elevated-card UI components.

- How elevation differs from normal flat cards.

- How to combine multiple components inside a scrollable layout.

---

## 📘 FancyCard Component — Notes

### ✅ What This Component Does

- Displays a **trending place card** with an image and details.
- Works as a reusable UI block in travel, listings, or discovery screens.
- Demonstrates **cross-platform shadow**, image rendering, and text hierarchy.
- 🧱 Component Structure

```bash
FancyCard
├── Heading ("Trending Places")
└── Card Container
├── Image (place photo)
└── Body
├── Title
├── Label / Subtitle
├── Description
└── Footer text
```

---

**🏗️ Component Overview**

`FancyCard` is a reusable UI card component that displays:

- A section heading
- An elevated card container
- A top image
- Title, location label, description, and footer text

Useful for showcasing **places, products, or featured items** in an app.

---

```tsx
// In Components create FanceCard.tsx

import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/iQKLS0mnp-WfnQgslv5qFdp7CeqV9TIpie3OWgvVdJo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oYXdhLW1haGFs/LXBhbGFjZS1qYWlw/dXJfNzgzNjEtNDQ0/Ny5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQwJnE9ODA',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Jaipur, The Pink City</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the city palace.
          </Text>
          <Text style={styles.cardFooter}>10 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },

  card: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginVertical: 12,
  },

  cardElevated: {
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  cardImage: {
    height: 200,
    width: '100%',
  },

  cardBody: {
    flex: 1,
    flexGrow: 1,
    padding: 12,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  cardLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },

  cardDescription: {
    fontSize: 13,
    color: '#444',
    marginTop: 8,
    marginBottom: 12,
    flexShrink: 1,
  },

  cardFooter: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
});
```

---

**🧩 Updated App.tsx**

```tsx
import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards /> // Import Elevated Cards from components
        <FancyCard /> // Import Fancy Cards from components
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
```

---

### **🎨 Style Breakdown**

- **headingText**

  - Large and bold header text with horizontal margin.

- **card**

  - 90% width and centered using `alignSelf`.
  - Rounded edges using `borderRadius: 10`.
  - White background.
  - `overflow: 'hidden'` ensures the image respects the border radius.
  - Vertical margin for spacing between cards.

- **cardElevated**
  - Shadow system for cross-platform effects:

| Property        | Platform | Purpose                                       |
| --------------- | -------- | --------------------------------------------- |
| `elevation`     | Android  | Creates drop shadow based on elevation value. |
| `shadowColor`   | iOS      | Defines shadow color.                         |
| `shadowOffset`  | iOS      | Controls shadow position (x, y).              |
| `shadowOpacity` | iOS      | Adjusts transparency of the shadow (0–1).     |
| `shadowRadius`  | iOS      | Sets blur radius for the shadow.              |

> Android _mostly_ uses `elevation`, whereas iOS relies on shadow properties.

- **cardImage**

  - Full-width cover image.
  - Height set to 200.

- **cardBody**

  - Padding around inner content.
  - `flexGrow: 1` allows the content to stretch if needed.

- **cardTitle**

  - Bold and slightly large heading text.

- **cardLabel**

  - Subheading with muted grey tone.

- **cardDescription**

  - Normal description text.
  - `flexShrink: 1` prevents overflow when content is long.
  - Vertical spacing applied.

- **cardFooter**

  - Small, muted, italic text ideal for tags like “10 mins away”.

---

### 📌 Key Takeaways

- Learned to combine **Android elevation** and **iOS shadow props** for cross-platform card shadows.
- Used **responsive image styling** with full-width layout and rounded corners.
- Applied proper **text hierarchy** (title → label → description → footer) for clean UI.
- Used **flexGrow** and spacing to structure card content neatly.
- Styled a **reusable card pattern** useful for travel, products, or listings.
- Improved understanding of **layout, shadows, spacing, and typography** in React Native.
