import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} className="mb-[-3]" {...props} />;
}

//TODO: add a missing page to handle 404 errors

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{headerShown: false}}/>
      <Tabs.Screen name="category" options={{headerShown: false}}/>
      <Tabs.Screen name="community" options={{headerShown: false}}/>
      <Tabs.Screen name="account" options={{headerShown: false}}/>
    </Tabs>
  );
}
