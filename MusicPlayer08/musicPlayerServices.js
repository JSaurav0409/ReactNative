import TrackPlayer, { Event, RepeatMode } from 'react-native-track-player';
import { playListData } from './src/constants';

// setting up the player for the first time when app gets launch or when the current tracks get load.

export async function setupPlayer() {
  let isSetup = false;

  try {
    await TrackPlayer.getActiveTrack();
    isSetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    isSetup = true;
  } finally {
    return isSetup;
  }
}

export async function addTrack() {
  // Loading the array of songs
  await TrackPlayer.add(playListData);
  // Plays the first song of the list after ending the last song of the list
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

// Adding functionality of play, pause, next song and previous song
export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });
  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });
  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });
}
