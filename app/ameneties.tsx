import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Ameneties = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Ameneties" }} />
      <Text>Ameneties</Text>
      <Text> Book Swimming Pool</Text>
      <Text> Book Gym</Text>
      <Text> Book Club House</Text>
      <Text> Book Tennis Court</Text>
      <Text> Book Basket Ball Court</Text>
      <Text> Book Badminton Court</Text>
      <Text> Book Squash Court</Text>
    </View>
  );
};

export default Ameneties;
