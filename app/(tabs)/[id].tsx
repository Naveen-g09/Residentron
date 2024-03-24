import { useLocalSearchParams, Stack } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NewPage = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.text}>{id} Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF", // Add your desired background color
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#333", // Add your desired text color
  },
});

export default NewPage;
