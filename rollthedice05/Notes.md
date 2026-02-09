# 🎲 Dice App – Key Concepts Notes (React Native)

---

### 1. Assets Management

- Images are imported as modules.
- Create a file **index.d.ts** in `src`, and import images as modules in that file.

```ts
declare module '*png';
```

- **Benefits :**
  - Bundled with app
  - Faster loading
  - No network dependency

---

### 2. PropsWithChildren (TypeScript)

- **PropsWithChildren** is a utility type that allows a components to accept both custom props and optional **children**.

```ts
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;
```

- **Why use it?**
  - Makes components reusable.
  - Ensure type safety.
  - Future-proof if children are added later.

---

### 3. ImageSourcePropType

- This type defines valid image sources in React Native (local assets or remote URLs).

```ts
const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
```

- **Benefit:**
  - Prevent invalid image assignments.
  - Required when using **Image** with TypeScript.

---

### 4. Reusable Component Pattern

- The **Dice** component is a presentational component that only receives data via props.

```tsx
const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};
```

- **Key Idea :**
  - Single Responsibility.
  - Easier to test and maintain.

---

### 🎯 Summary – Dice App Key Concepts

- **Asset Management:** Images are imported as modules and declared globally using `index.d.ts`, ensuring type safety, fast loading, and offline availability.
- **PropsWithChildren:** Enables components to accept typed props along with optional children, improving reusability and future extensibility.
- **ImageSourcePropType:** Enforces valid image sources in state and props, preventing runtime errors when working with images in TypeScript.
- **Reusable Component Pattern:** The `Dice` component follows single-responsibility by rendering UI based only on props, making the codebase clean, testable, and maintainable.

_(Haptic feedback concepts can be added later.)_
