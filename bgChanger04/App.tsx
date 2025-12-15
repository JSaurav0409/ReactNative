import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [randomBgColor, setrandomBgColor] = useState('#ffffff');

  const genrateColor = () => {
    const hexRange = '0123456789ABDCDEF';
    let color = '#';

    for (let idx = 0; idx < 6; idx++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    setrandomBgColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBgColor} />
      <View style={[styles.container, { backgroundColor: randomBgColor }]}>
        <TouchableOpacity onPress={genrateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.btnText}>Press Me !</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
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
