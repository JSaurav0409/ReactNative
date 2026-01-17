import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';

import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import { playListData } from '../constants';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';

const { width } = Dimensions.get('window');

const MusicPlayer = () => {
  const [track, setTrack] = useState<Track | null>();

  // If music finish it will play the next music
  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    switch (event.type) {
      case Event.PlaybackActiveTrackChanged:
        // In newer versions, the track object is directly on the event
        // We use event.track instead of event.nextTrack
        if (event.track) {
          setTrack(event.track);
        }
        break;
    }
  });

  // Update the renderArtWork function to accept 'item'
  const renderArtWork = ({ item }: { item: Track }) => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {item.artwork && (
            <Image
              style={styles.albumArtImg}
              source={{ uri: item.artwork.toString() }}
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      />
      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4,
  },
});
