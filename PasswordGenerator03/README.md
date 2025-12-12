# Password Generator App

- In this project, we are building a password generator app which generate password based on user inputs like ( Digits, Uppercase, Lowercase) etc.

---

## We are going to learn multiple modules here

**1 - Yup**

- Yup is a schema builder for runtime value parsing and validation.
- Define a schema, transform a value to match, assert the shape of an existing value, or both.
- Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformation.

- **Feature**
  - Concise yet expressive schema interface, equipped to model simple to complex data models.
  - Powerful TypeScript support. Infer static types from schema, or ensure schema correctly implement a type.
  - Built-in async validation support. Model server-side and client-side validation equally well.
  - Extensible: add your own type-safe methods and schema.
  - Rich error details, make debugging a breeze.
  - Compatible with Standard Schema

```tsx
// importing components from "YUP", either you can import only the certain component you requires or can impoert everything

// Importing only certain components

import { object, string, number, date, InferType } from 'yup';

// Importing everything altogether

import * as Yup from 'yup';

// setting up the schema
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be minimum of 4 number')
    .max(16, 'Should be maximum of 16 number')
    .required('Length is required.'),
});
```

**Explanaiton**

- `.min` is used for defining the lower threshold.
- `.max` is used for defining the upper threshold.
- `.required` is use for making the input field compulsary to fill.

---

**🔑 useState Breakdown**

| **State Variable**    | **Purpose (Brief)**                           |
| --------------------- | --------------------------------------------- |
| `password`            | Stores the generated password.                |
| `isPasswordGenerated` | Tracks whether a password has been generated. |
| `lowerCase`           | Enables lowercase characters option.          |
| `upperCase`           | Enables uppercase characters option.          |
| `numbers`             | Enables numeric characters option.            |
| `symbols`             | Enables symbol characters option.             |

**🔍 What useState Does? Briefly**

- **useState** stores a value and re-renders the UI whenever that value changes.

**🧩 Function Roles (Brief)**

| **Function**                | **What It Will Do**                                                        |
| --------------------------- | -------------------------------------------------------------------------- |
| `generatedPasswordString()` | Combines selected character sets (lowercase, uppercase, numbers, symbols). |
| `createPassword()`          | Generates random password based on the final character pool.               |
| `resetPasswordState()`      | Clears all password-related states and resets toggles.                     |

---

## 🔍 Function Explanations

**1️⃣ generatedPasswordString(passwordLength):**

- This function prepares the final character pool based on user-selected options (uppercase, lowercase, digits, symbols).
- Then it calls `createPassword()` to actually generate the random password and updates the state.
- **In short:**
  - ✔ Collects characters → ✔ Generates password → ✔ Saves it to state.

**2️⃣ createPassword(characters, passwordLength):**

- This function creates the password by randomly selecting characters one by one from the final character pool.
- **In short:**
  - ✔ Loops passwordLength times → ✔ Picks a random character → ✔ Builds and returns the password.

**3️⃣ resetPasswordState():**

- This resets the entire password generator back to default settings.
- **In short:**
  - ✔ Clears password → ✔ Resets toggles → ✔ Marks password as not generated.
