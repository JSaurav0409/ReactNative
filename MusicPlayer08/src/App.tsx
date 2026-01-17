import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { addTrack, setupPlayer } from '../musicPlayerServices';
import MusicPlayer from './screens/MusicPlayer';

export default function Test() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function initialize() {
    try {
      // 1. Give the native bridge a moment to stabilize on Android 15
      const isSetup = await setupPlayer();

      if (isSetup) {
        await addTrack();
        setIsPlayerReady(true);
      }
    } catch (error) {
      console.log('Player Setup Error:', error);
      // Fallback: Alert user if initialization fails
      Alert.alert('Error', 'Could not initialize music player.');
    }
  }

  useEffect(() => {
    initialize();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Matches music player theme
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
