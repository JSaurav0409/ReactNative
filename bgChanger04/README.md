# Shape Color Changer App – Brief Documentation

## Overview

- This React Native app displays four shapes fixed at the four corners of the screen.
- On pressing the **“Press Me!”** button, the background color and each shape’s color change.
- Every color generated is **unique**, ensuring no two shapes or the background share the same color.

---

## Core Logic

### Random Color Generator

```js
const getRandomColor = () => { ... }
```

- Creates a valid 6-digit hexadecimal color.
- Uses random selection from hexadecimal characters **(0–F)**.

---

### Unique Color Generation

```js
const getUniqueColors = count => { ... }

```

- Uses a **Set** to avoid duplicate colors.
- Returns the exact number of unique colors requested.

---

### State Management

- **bgColor** stores the background color of the app.
- **shapeColors** stores individual colors for each shape:
  - **tl** → top-left square
  - **tr** → top-right circle
  - **bl** → bottom-left circle
  - **br** → bottom-right rectangle

---

### User Interaction

```js
const handlePress = () => { ... }
```

- Generates 5 unique colors on each button press.
- Assigns:
  - 1 color to the background
  - 4 colors to the shapes
- Triggers a re-render with updated colors.

---

### Layout and Styling

- Shapes are positioned using **position: 'absolute'** to stay fixed in corners.
- Flexbox is used only for centering the button.
- Each shape has a distinct style (square, circle, rectangle).

---

### Application Flow

1. App loads with default colors.
2. User presses “Press Me!”.
3. Background and shapes update with new unique colors.
4. Shape positions remain unchanged.

---

## Key Takeaways

- Demonstrates controlled randomness using **Set**.
- Shows how to updated drives UI changes.
- Reinforces absolute positioning and reusable styling patterns in React Native.
