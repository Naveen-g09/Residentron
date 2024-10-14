import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Announcement = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>No Announcements yet</Text>
      <Text style={styles.subMessage}>You have no notices at the moment.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take full height of the device
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#f9f9f9", // Light background color
    padding: 20, // Padding around the content
  },
  message: {
    fontSize: 28, // Large font size for the message
    fontWeight: "bold",
    color: "#ff5722", // Orange color for the message
    marginBottom: 10, // Space below the message
  },
  subMessage: {
    fontSize: 18, // Medium font size for the sub-message
    color: "#666", // Darker color for the sub-message
    textAlign: "center", // Center align the text
  },
});

export default Announcement;
