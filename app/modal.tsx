import { Stack } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Modal = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: "Notifications" }} />
      <View style={styles.content}>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>Notification 1</Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>Notification 2</Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>Notification 3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  notification: {
    backgroundColor: "powderblue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  notificationText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Modal;
