import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/iQKLS0mnp-WfnQgslv5qFdp7CeqV9TIpie3OWgvVdJo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oYXdhLW1haGFs/LXBhbGFjZS1qYWlw/dXJfNzgzNjEtNDQ0/Ny5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQwJnE9ODA',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Jaipur, The Pink City</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the city palace.
          </Text>
          <Text style={styles.cardFooter}>10 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },

  card: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginVertical: 12,
  },

  cardElevated: {
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  cardImage: {
    height: 200,
    width: '100%',
  },

  cardBody: {
    flex: 1,
    flexGrow: 1,
    padding: 12,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  cardLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },

  cardDescription: {
    fontSize: 13,
    color: '#444',
    marginTop: 8,
    marginBottom: 12,
    flexShrink: 1,
  },

  cardFooter: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
});
