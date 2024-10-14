import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Payment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Status</Text>
      <Text style={styles.message}>
        There are no payment dues for your apartment
      </Text>
      <Text style={styles.thankYou}>Thank you for your prompt payment!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take full height of the device
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#f5f5f5", // Light background color
    padding: 20, // Padding around the content
  },
  title: {
    fontSize: 28, // Large font size for the title
    fontWeight: "bold",
    marginBottom: 20, // Space below the title
    color: "#4CAF50", // Green color for the title
  },
  message: {
    fontSize: 20, // Medium font size for the message
    textAlign: "center", // Center align the text
    color: "#333", // Darker color for the message
    marginBottom: 10, // Space below the message
  },
  thankYou: {
    fontSize: 20, // Same size as the message for consistency
    textAlign: "center",
    color: "#333", // Darker color for the thank you message
  },
});

export default Payment;
