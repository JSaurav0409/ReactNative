import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// Form Validation
import * as Yup from 'yup';
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be minimum of 4 number')
    .max(16, 'Should be maximum of 16 number')
    .required('Length is required.'),
});

// `useState`: useState stores and updates data inside a component, and whenever the value changes, React automatically re-renders the UI to reflect the updated state across the screen.
export default function App() {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatedPasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values);
              generatedPasswordString(+values.passwordLength); // Here the "+" converting the datatype from string to numbers.
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length: </Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorsText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex. 9"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include LowerCase</Text>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase</Text>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#29AB87"
                  />
                </View>

                <View style={styles.formAction}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}
                  >
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPasswordGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result: </Text>
            <Text style={styles.description}>Long press to copy </Text>
            <Text style={styles.generatedPassword} selectable={true}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // --- Global and Layout Containers ---
  appContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light gray background
    paddingHorizontal: 12,
  },
  formContainer: {
    padding: 18,
    borderRadius: 10,
    marginVertical: 20,
    backgroundColor: '#FFFFFF', // White card for the main form
    elevation: 8, // Android shadow
    shadowOffset: { width: 0, height: 4 }, // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  // --- Text and Headings ---
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingBottom: 10,
  },
  heading: {
    fontSize: 16,
    color: '#4A4A4A',
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  description: {
    color: '#777777',
    marginBottom: 10,
    fontSize: 12,
  },
  errorsText: {
    fontSize: 12,
    color: '#FF0000', // Bright red for errors
    marginLeft: 5,
    fontWeight: '500',
  },

  // --- Input and Checkbox Rows ---
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0', // Light separator
  },
  inputColumn: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  inputStyle: {
    padding: 8,
    width: 60,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 16,
    color: '#333333',
  },

  // --- Buttons (Actions) ---
  formAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  primaryBtn: {
    flex: 1,
    backgroundColor: '#29AB87', // Primary Green
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // Note: The disabled state styling should be handled dynamically in the component's style array
  },
  primaryBtnTxt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryBtn: {
    flex: 1,
    backgroundColor: '#CCCCCC', // Secondary Gray for Reset
    padding: 12,
    borderRadius: 8,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryBtnTxt: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '700',
  },

  // --- Password Output Card ---
  card: {
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 12,
    marginVertical: 10,
    alignItems: 'center',
  },
  cardElevated: {
    backgroundColor: '#E6F4F1', // Light mint background
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#29AB87',
    shadowOpacity: 0.15,
    shadowRadius: 3,
    borderWidth: 1,
    borderColor: '#29AB8750', // A slight border color
  },
  generatedPassword: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1565C0', // Strong blue for the generated password
    textAlign: 'center',
    padding: 5,
  },
});
