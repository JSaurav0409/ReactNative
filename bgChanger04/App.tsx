import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { useState } from 'react';

// Generate a single random hex color
const getRandomColor = () => {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Generate N unique random colors
const getUniqueColors = count => {
  const colors = new Set();
  while (colors.size < count) {
    colors.add(getRandomColor());
  }
  return Array.from(colors);
};

export default function App() {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [shapeColors, setShapeColors] = useState({
    tl: '#FF0000',
    tr: '#00FF00',
    bl: '#0000FF',
    br: '#FFFF00',
  });

  const handlePress = () => {
    // Generate 5 unique colors (1 for bg + 4 for shapes)
    const [newBg, ...newShapes] = getUniqueColors(5);

    setBgColor(newBg);
    setShapeColors({
      tl: newShapes[0],
      tr: newShapes[1],
      bl: newShapes[2],
      br: newShapes[3],
    });
  };

  return (
    <>
      <StatusBar backgroundColor={bgColor} />
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        {/* Shapes */}
        <View
          style={[
            styles.square,
            { top: 40, left: 20, backgroundColor: shapeColors.tl },
          ]}
        />
        <View
          style={[
            styles.circle,
            { top: 40, right: 20, backgroundColor: shapeColors.tr },
          ]}
        />
        <View
          style={[
            styles.circle,
            { bottom: 40, left: 20, backgroundColor: shapeColors.bl },
          ]}
        />
        <View
          style={[
            styles.rectangle,
            { bottom: 40, right: 20, backgroundColor: shapeColors.br },
          ]}
        />

        {/* Button */}
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.actionBtn}>
            <Text style={styles.btnText}>Press Me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  square: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  circle: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  triangle: {
    position: 'absolute',
  },
  rectangle: {
    position: 'absolute',
    width: 140,
    height: 100,
    borderRadius: 10,
  },

  actionBtn: {
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: '#1481dbff',
    paddingVertical: 12,
    paddingHorizontal: 40,
  },

  btnText: {
    fontSize: 22,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
});
