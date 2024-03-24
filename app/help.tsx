import { Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const Help = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Maid and cleaning services" }} />
      <Text>Help Page</Text>
      <Text> Book Maid</Text>
      <Text> Book Cleaning Services</Text>
      <Text> Book Cook</Text>
      <Text> Book Baby Sitter</Text>
      <Text> Book Nanny</Text>
      <Text> Book Elderly Care</Text>
      <Text> Book Pet Care</Text>
    </View>
  );
};

export default Help;
