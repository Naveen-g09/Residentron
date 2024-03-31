import { Stack } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const News = () => {
  const newsItems = [
    "House #123 is for sale",
    "Main gate broke",
    "Community meeting at 7PM",
    "Garage sale at House #456",
    "Lost dog found near the park",
    "Swimming pool will be closed for maintenance",
  ];

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: "News" }} />
      {newsItems.map((news, index) => (
        <View key={index} style={styles.newsBlock}>
          <Text>{news}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  newsBlock: {
    backgroundColor: "powderblue",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default News;
