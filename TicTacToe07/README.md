# Tic Tac Toe (React Native) – Logic Notes

## 1. Core State Management

```ts
const [isCross, setIsCross] = useState<boolean>(false);
const [gameWinner, setGameWinner] = useState<string>('');
const [gameState, setGameState] = useState(new Array(9).fill('empty'));
```

### Purpose of Each State

- **isCross**
  - Boolean flag to track whose turn it is
  - false → Circle (O)
  - true → Cross (X)
  - Toggled after every valid move
- **gameWinner**

  - Stores the final resut of the game.
  - Empty string means game is still ongoing.
  - **Used to:**
    - Stop further moves
    - Show winner banner
    - Change button text

- **gameState**

  - Represent the **3x3 board** as flat array
  - In React Native, **new Array(n).fill(value)** is a method to create an array of a specified length populated with a given value.
  - For example : `const [gameState, setGameState] = useState(new Array(9).fill('empty'));`
  - **Index Mapping**
    0 | 1 | 2
    3 | 4 | 5
    6 | 7 | 8

  - Possible values:
    - **'empty'**
    - **'circle'**
    - **'cross'**

---

## 2. Resetting the Game

```ts
const reloadGame = () => {
  setIsCross(false);
  setGameWinner('');
  setGameState(new Array(9).fill('empty'));
};
```

**Logic Insight**

- Fully resets the game to its **initial state**
- Important to reset:
  - Turn Indicator
  - Winner Message
  - Board State

This ensure no **stale data** leaks into new game

---

## 3. Handling Cell Press (`onChangeItem`)

```ts
const onChangeItem = (itemNumber: number) => {

```

### Step-by-Step Logic

**1. Block moves if game is already over**

```ts
if (gameWinner) {
  Snackbar.show({ text: gameWinner });
  return;
}
```

- Prevents illegal moves after game completion
- Snackbar acts as user feedback instead of silent failure

**2. Allow move only on empty cell**

```ts
if (gameState[itemNumber] === 'empty') {
  gameState[itemNumber] = isCross ? 'cross' : 'circle';
  setIsCross(!isCross);
}
```

- Determines symbol based on **isCross**
- Updates the board
- Flips the turn

### ⚠️ Important Concept

Although **gameState** is mutated directly here, React still re-renders because:

- **setIsCross** triggers a state update
- In production code, cloning the array is recommended for immutability

**3. Prevent overwriting existing moves**

```ts
else {
  Snackbar.show({
    text: 'Position is already filled',
  });
}
```

- Guards against invalid input
- Improves UX by explaining why nothing happened

**4. Check game outcome after every valid move**

```ts
checkIsWinner();
```

- Centralizes win/draw logic
- Called only after a valid placement

---

## 4. Winner Detection Logic (checkIsWinner)

**Horizontal Checks**

```ts
(gameState[0] === gameState[1]) === gameState[2];
(gameState[3] === gameState[4]) === gameState[5];
(gameState[6] === gameState[7]) === gameState[8];
```

- Covers all rows
- Ensures value is not **'empty'** before declarng winner

**Vertical Checks**

```ts
(gameState[0] === gameState[3]) === gameState[6];
(gameState[1] === gameState[4]) === gameState[7];
(gameState[2] === gameState[5]) === gameState[8];
```

- Covers all columns

**Diagonal Checks**

```ts
(gameState[0] === gameState[4]) === gameState[8];
(gameState[2] === gameState[4]) === gameState[6];
```

- Covers both diagonal

**Draw Condition**

```ts
else if (!gameState.includes('empty')) {
  setGameWinner('Game Draw....');
}
```

- If no empty cells remain
- An no winner was found
- The game is declared a draw

**This condition must always be last, otherwise it may falsely trigger early.**

---

## 5. Conditional Rendering (Game Status)

```ts
{
  gameWinner ? <WinnerView /> : <TurnIndicator />;
}
```

**Logic Importance**

- UI reacts purely to state
- No extra flags needed
- Clean separation
  - Winner view when game ends
  - Turn indicator during play

---

## 6. Game Board Rendering (FlatList)

```ts
<FlatList
  numColumns={3}
  data={gameState}
  renderItem={({ item, index }) => (
    <Pressable onPress={() => onChangeItem(index)}>
      <Icons name={item} />
    </Pressable>
  )}
/>
```

**Why FlatList?**

- Efficient rendering
- Easy grid creation using **numColumns**
- Index maps directly to **gameState**

- Each Press:
  - Knows exact board position
  - Delegates logic to **onChangeItem**

---

## 7. Icons Component Logic

```ts
const Icons = ({ name }: { name: string }) => {
  switch (name) {
    case 'circle':
      return <CircleIcon />;
    case 'cross':
      return <CrossIcon />;
    default:
      return <PlaceholderIcon />;
  }
};
```

**Key Concept**

- UI abstraction layer
- Board logic does not care about icon implementation
- Icons respond purely to state value:
  - **'empty'** → placeholder
  - **'circle'** → O
  - **'cross'** → X

This seperation improves maintainability and readability.

---

## 8. Overall Game Flow Summary

1. App initializes with empty board
2. Player taps a cell
3. App validates move
4. Board updates
5. Turn switches
6. Winner logic runs
7. UI updates based on state
8. Game stops on win/draw
9. User can reset game

---

## 9. Interview-Worthy Takeaways

- Uses state-driven UI
- Prevents invalid moves
- Centralized win logic
- Clear separation of concerns
- Scalable structure (easy to add AI, timer, score)
