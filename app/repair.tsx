import { Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const AppliancesRepair = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Appliances Repair" }} />
      <Text>Appliances Repair Page</Text>
    </View>
  );
};

export default AppliancesRepair;
