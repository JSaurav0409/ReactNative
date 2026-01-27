# 📌 Logical Notes – React Navigation with Type Safety (Native Stack)

---

## 1️⃣ RootStackParamList – Navigation Contract (Most Important)

```ts
export type RootStackParamList = {
  Home: undefined;
  Details: { productId: string };
};
```

#### Logic

- This defines **all the screens + their expected route parameters**.
- Acts as a **single source of truth** for navigation
- Enforces **compile-time safety** (TypeScript error if params are wrong)

#### Meaning

| Screen  | Params                        |
| ------- | ----------------------------- |
| Home    | No params                     |
| Details | Requires `productId` (string) |

**If you try to navigate to `Details` without `productId`, TypeScript will fail.**

---

## 2️⃣ createNativeStackNavigator with Generics

```ts
const Stack = createNativeStackNavigator<RootStackParamList>();
```

#### Logic

- Tells React Navigation to **strictly follow RootStackParamList**
- Enables **auto-suggestion and type checking** in navigation methods

---

## 3️⃣ Home Screen – Typed Navigation via Props

```ts
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
```

#### Logic

- Injects **typed `navigation` and `route` props**
- Guarantees correct screen names and params

---

## 4️⃣ Navigation Methods – Logical Difference

### 1. navigate()

```ts
navigation.navigate('Details', { productId: '86' });
```

- Reuses screen if it already exists in stack
- Best for **normal screen transitions**

### 2. push()

```ts
navigation.push('Details', { productId: '86' });
```

- Always **adds a new screen instance**
- Even if you are already on **`Details`**
- Useful when you want **multiple instances** of same screen

### ⚠️ Why params are required?

Because `Details` is defined as:

```ts
Details: {
  productId: string;
}
```

So navigation **must provide it**.

---

## 5️⃣ App.tsx – Stack Structure Logic

```tsx
<NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
```

#### Logic

- **`NavigationContainer`** manages **navigation state**
- **`Stack.Navigator`** manages screen history (stack)
- **`initialRouteName`** defines **first screen**

---

## 6️⃣ Details Screen – Receiving Route Params

```ts
type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
const { productId } = route.params;
```

#### Logic

- TypeScript ensures **`productId`** **always exists**
- No runtime undefined checks needed.

---

## 7️⃣ useNavigation Hook – When Props Are Not Available

```ts
const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
```

#### Logic

- Used when:
  - Component is **not directly a screen**
  - Or props drilling is avoided
- Still remains **type-safe**

---

## 8️⃣ Back Navigation Logic (Very Important)

**1. 🔙 goBack()**

- Goes **one screen back**
- Does not care about screen name

```ts
navigation.goBack();
```

**2. 🔙 pop(n)**

- Removes **n** screen from stacks
- Uedful in multi-step flows

```ts
navigation.pop(2);
```

**3.🔝 popToTop()**

- Clears stacks till **first screen**
- Ideal after **success/resets** flows

---

## 9️⃣ Mental Model (Easy to Remember)

- **Stack** = array of screens
- **push()** → add new item
- **pop()** → remove item
- **navigate()** → jump or reuse
- **goBack()** → one step back
- **popToTop()** → reset stack
