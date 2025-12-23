# 💱 Currency Converter App – Logic & FlatList Notes

---

## 1. App Overview

- This app converts **Indian Rupees (₹)** into multiple foreign currencies.
- The user enters an amount in INR and selects a target currency.
- Conversion happens instantly using predefined exchange rates.

---

## 2. State Management

```ts
const [inputValue, setInputValue] = useState('');
const [resultValue, setResultValue] = useState('');
const [targetCurrency, setTargetCurrency] = useState('');
```

- **inputValue :** Stores the amount entered by the user.
- **resultValue :** Holds the converted currency value along with its symbol.
- **targetCurrency :** Tracks the selected currency logic and UI feedback.

---

## 3. Currency Conversion Logic

```ts
cosnt buttonPressed = (targetValue: Currency) => {}
```

### Flows of Execution:

- Checks if the input field is empty.
- Converts the input string into a number using **parseFloat**.
- Validates the numbers to avoid the invalid conversion.
- Multiplies the entered INR value with selected currency rate.
- Formats the results with currency symbol and 2 decimal places
- Updates the state with the converted value and selected currency.

```ts
const convertedValue = inputAmount * targetValue.value;
const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
```

---

## 4. Error Handling Using Snackbar

- Snackbar is used instead of alerts for a better experience.
- Errors handled:
  - Empty input
  - Invalid numeric input
- Provides quick, non-blocking feedbck to the user.

---

## 5. FlatList Core Usage

```tsx
<FlatList
  numColumns={3}
  data={currencyByRupee}
  keyExtractor={item => item.name}
  renderItem={({ item }) => ( ... )}
/>
```

### Key Concepts:

- **data**
  Supplies the list of currencies.

- **numColumns={3}**
  Renders the list in a grid layout.

- **keyExtractor**
  Ensures each item has a unique key using currency name.

- **renderItem**
  Controls how each currency item is rendered.

---

## 6. Currency Selection Handling

```tsx
<Pressable onPress={() => buttonPressed(item)}>
```

- Each currency item is wrapped in a Pressable.

- On tap:

  - Calls the conversion logic.
  - Passes the selected currency object.

- The selected currency is tracked using state.

---

## 7. Controlled Input Handling

```tsx
<TextInput
  value={inputValue}
  onChangeText={setInputValue}
  keyboardType="number-pad"
/>
```

- Input field is fully controlled using state.
- Ensures real-time updates and validation.
- Numeric keypad improves input accuracy.

---

## 8. Component-Based Structure

- **CurrencyButton** is a reusable UI component.

- Parent component handles:
  - State
  - Logic
  - Conversion
- Child component focuses only on display.

---

## 9. Key Learnings

- Using **useState** for real-time UI updates.
- Implementing validation before processing user input.
- Efficient list rendering with **FlatList**.
- Grid layout using **numColumns**.
- Clean separation of logic and UI components.
