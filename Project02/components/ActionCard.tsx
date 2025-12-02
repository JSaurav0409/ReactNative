import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(link: string) {
    Linking.openURL(link);
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Blog Card</Text>

      <View style={[styles.card, styles.elevatedCard]}>
        {/* Header */}
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>

        {/* Image */}
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/RMfx-w5Qdb0JJFTNEKbgeWFxHWV5my-bdDtT7-SfN_E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aGFzaG5vZGUuY29t/L3Jlcy9oYXNobm9k/ZS9pbWFnZS91cGxv/YWQvdjE2MTMyOTQ5/ODM2NzYvODQxeDcx/akdyLnBuZz93PTE2/MDAmaD04NDAmZml0/PWNyb3AmY3JvcD1l/bnRyb3B5JmF1dG89/Y29tcHJlc3MsZm9y/bWF0JmZvcm1hdD13/ZWJw',
          }}
          style={styles.cardImage}
        />

        {/* Description */}
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.bodyText}>
            Node.js 21 is here! Node always brings great things for JavaScript
            users. There is a constant need to improve tech and trends online.
            What better tech can bring such a change than Node.js? Since 2009,
            Node’s strong community has offered a lot. Experts worldwide wait to
            learn more about this open-source runtime. A great mix of features
            is available to us again. Let’s look at the new offerings of Node.js
            v21 features and functions.
          </Text>
        </View>

        {/* Footer Buttons */}
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://webmobtech.com/blog/whats-new-in-node-js-21-explore-features/',
              )
            }
          >
            <Text style={styles.externalWebsiteLink}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.linkedin.com/in/contact-sauravjha/')
            }
          >
            <Text style={styles.socialLink}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },

  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
  },

  elevatedCard: {
    elevation: 4,
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  headingContainer: {
    padding: 10,
  },

  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },

  cardImage: {
    height: 200,
    width: '100%',
  },

  bodyContainer: {
    padding: 10,
  },

  bodyText: {
    fontSize: 14,
    color: '#444',
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },

  externalWebsiteLink: {
    color: '#fff',
    backgroundColor: '#0051ffff',
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '600',
  },

  socialLink: {
    color: '#fff',
    backgroundColor: '#0194e9ff',
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});
