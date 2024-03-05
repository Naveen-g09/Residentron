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
      <Tabs.Screen name="index" 
      options={{
        title: "Home",
        tabBarIcon: (props) => <TabBarIcon {...props} name="home" />,
        headerShown: false}}/>
      <Tabs.Screen name="category" options={{
        tabBarIcon: (props) => <TabBarIcon {...props} name="list" />,
        headerShown: false}}/>
      <Tabs.Screen name="community" options={{
        tabBarIcon: (props) => <TabBarIcon {...props} name="users" />,
        headerShown: false}}/>
      <Tabs.Screen name="account" options={{
        tabBarIcon: (props) => <TabBarIcon {...props} name="user" />,
        headerShown: false}}/>
    </Tabs>
  );
}
