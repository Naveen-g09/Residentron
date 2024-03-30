import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

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
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: (props) => <TabBarIcon {...props} name="home" />,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "54BCBD",
          },

          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="bell-o"
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="list" />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="users" />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="user" />,
          headerShown: false,
        }}
      />
      <Tabs.Screen name="[id]" options={{ headerShown: false, href: null }} />
    </Tabs>
  );
}
