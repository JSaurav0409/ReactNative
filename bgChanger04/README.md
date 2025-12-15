# Random Background Color App – Documentation

## Overview

- This React Native app changes the background color of the screen randomly when the user presses a button.
- It demonstrates basic state management, event handling, and dynamic styling in React Native.

---

## Core Concepts Used

### State Management

```js
const [randomBgColor, setrandomBgColor] = useState('#ffffff');
```

- `useState` initializes the background color with white.
- `randomBgColor` holds the current background color value.
- Updating the state automatically re-renders the UI.

### Color Generator Logic

```js
const genrateColor = () => {
  const hexRange = '0123456789ABDCDEF';
  let color = '#';

  for (let idx = 0; idx < 6; idx++) {
    color += hexRange[Math.floor(Math.random() * 16)];
  }

  setrandomBgColor(color);
};
```

- **hexRange** contains all valid hexadecimal characters.
- A hex color always starts with **#**.
- The loop runs 6 times to generate a valid 6-digit hex color.
- Math.random() generates a random index between 0 and 15.
- A random character is appended to the color string in each iteration.
- The final color is stored in state using **setrandomBgColor**.

---

### UI Components used

**StatusBar**

```js
<StatusBar backgroundColor={randomBgColor} />
```

- Updates the status bar color dynamically.
- Keeps the system UI consistent with the app background.

**Main Container**

```js
<View style={[styles.container, { backgroundColor: randomBgColor }]}>

```

- Acts as the full-screen container.
- Applies the dynamic background color.

**Button UI**

```js
<View style={styles.actionBtn}>
  <Text style={styles.btnText}>Press Me !</Text>
</View>
```

- Displays a tappable button.
- Styled using padding, border radius, and uppercase text.

**Styling**

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#1481dbff',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  btnText: {
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
});
```

- flex: 1 fills the entire screen.
- Content is centered both vertically and horizontally.
- Button styling improves usability and visual clarity.

---

### Application Flow

- App loads with a default white background.
- User presses the “Press Me!” button.
- A random hex color is generated.
- Background and status bar colors update instantly.

### Key Takeaways

- Demonstrates how state controls UI behavior.
- Shows practical use of event handling in React Native.
- Highlights dynamic styling and real-time UI updates.
- A beginner-friendly example for understanding interactive components.
