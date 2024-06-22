import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, Redirect } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { useRecoilValueLoadable } from "recoil";

import { userAtom } from "@/store";

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

export default function ProtectedLayout() {
  const { contents: user, state } = useRecoilValueLoadable(userAtom);

  if (!user) {
    return <Redirect href="/sign-in" />;
  }
  return (
    <Tabs initialRouteName="home">
      <Tabs.Screen
        name="home"
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
    </Tabs>
  );
}
