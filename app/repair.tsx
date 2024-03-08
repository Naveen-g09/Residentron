import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AppliancesRepair = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Appliances Repair" }} />
      <Text>Appliances Repair Page</Text>
    </View>
  );
};

export default AppliancesRepair;
