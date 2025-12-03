import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Person 1',
      status: 'CEO',
      imageUrl:
        'https://imgs.search.brave.com/QCMRgrch_DDafYDD2GQkZYuMsu9nxnvj4ztoIyDInT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTYwLzU0NC9zbWFs/bC9wcm9maWxlLWlj/b24tc2ltcGxlLWZs/YXQtc3R5bGUtcGVy/c29uLXBlb3BsZS11/c2VyLWF2YXRhci1w/aWN0b2dyYW0tbWVz/c2FnZS1vZmZpY2Ut/YnVzaW5lc3MtbWFu/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uLWlz/b2xhdGVkLW9uLXdo/aXRlLWJhY2tncm91/bmQtZXBzLTEwLXZl/Y3Rvci5qcGc',
    },
    {
      uid: 2,
      name: 'Person 2',
      status: 'CFO',
      imageUrl:
        'https://imgs.search.brave.com/QCMRgrch_DDafYDD2GQkZYuMsu9nxnvj4ztoIyDInT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTYwLzU0NC9zbWFs/bC9wcm9maWxlLWlj/b24tc2ltcGxlLWZs/YXQtc3R5bGUtcGVy/c29uLXBlb3BsZS11/c2VyLWF2YXRhci1w/aWN0b2dyYW0tbWVz/c2FnZS1vZmZpY2Ut/YnVzaW5lc3MtbWFu/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uLWlz/b2xhdGVkLW9uLXdo/aXRlLWJhY2tncm91/bmQtZXBzLTEwLXZl/Y3Rvci5qcGc',
    },
    {
      uid: 3,
      name: 'Person 3',
      status: 'COO',
      imageUrl:
        'https://imgs.search.brave.com/QCMRgrch_DDafYDD2GQkZYuMsu9nxnvj4ztoIyDInT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTYwLzU0NC9zbWFs/bC9wcm9maWxlLWlj/b24tc2ltcGxlLWZs/YXQtc3R5bGUtcGVy/c29uLXBlb3BsZS11/c2VyLWF2YXRhci1w/aWN0b2dyYW0tbWVz/c2FnZS1vZmZpY2Ut/YnVzaW5lc3MtbWFu/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uLWlz/b2xhdGVkLW9uLXdo/aXRlLWJhY2tncm91/bmQtZXBzLTEwLXZl/Y3Rvci5qcGc',
    },
    {
      uid: 4,
      name: 'Person 4',
      status: 'CAO',
      imageUrl:
        'https://imgs.search.brave.com/QCMRgrch_DDafYDD2GQkZYuMsu9nxnvj4ztoIyDInT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTYwLzU0NC9zbWFs/bC9wcm9maWxlLWlj/b24tc2ltcGxlLWZs/YXQtc3R5bGUtcGVy/c29uLXBlb3BsZS11/c2VyLWF2YXRhci1w/aWN0b2dyYW0tbWVz/c2FnZS1vZmZpY2Ut/YnVzaW5lc3MtbWFu/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uLWlz/b2xhdGVkLW9uLXdo/aXRlLWJhY2tncm91/bmQtZXBzLTEwLXZl/Y3Rvci5qcGc',
    },
  ];
  return (
    <View>
      <Text style={styles.headingLists}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View> // In Key, we only use uniqueId
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // Section Header Styling
  headingLists: {
    fontSize: 22,
    fontWeight: '700', // Slightly bolder
    paddingHorizontal: 16,
    color: '#1E293B', // Darker text for better contrast
    marginTop: 10,
    marginBottom: 8,
  },

  // Container for the entire list (often applied to a ScrollView or FlatList content container)
  container: {
    paddingHorizontal: 12, // Reduced padding to give more space for the cards
    paddingBottom: 4,
  },

  // Individual User Card Styling (Clean, elevated look)
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Increased margin for better separation
    backgroundColor: '#FFFFFF', // Clean white background
    padding: 12, // Increased padding inside the card
    borderRadius: 8, // More subtle rounded corners
    elevation: 2, // Android shadow
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1, // Subtle shadow for elevation
    shadowRadius: 2,
  },

  // User Profile Image (Circular, standard size)
  userImage: {
    height: 55, // Standard size for a list avatar
    width: 55, // Standard size for a list avatar
    borderRadius: 55 / 2, // Perfect circle
    marginRight: 12,
    borderWidth: 1.5, // Add a subtle border
    borderColor: '#4A90E2', // Primary color for the border
  },

  // User Name Text
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#334155', // Professional, dark color
  },

  // User Status/Subtitle Text
  userStatus: {
    fontSize: 13,
    fontWeight: '400',
    color: '#64748B', // Grayed out for secondary information
    marginTop: 2,
  },
});
