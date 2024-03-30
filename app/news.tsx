import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const News = () => {
  const newsItems = [
    "House #123 is for sale",
    "Main gate broke",
    "Community meeting at 7PM",
    "Garage sale at House #456",
    "Lost dog found near the park",
    "Swimming pool will be closed for maintenance"
  ];

  return (
    <View style={styles.container}>
      {newsItems.map((news, index) => (
        <View key={index} style={styles.newsBlock}>
          <Text>{news}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  newsBlock: {
    backgroundColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default News