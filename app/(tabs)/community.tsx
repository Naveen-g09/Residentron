import React from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionic from "react-native-vector-icons/Ionicons";

import Post from "../Post";
import Stories from "../Stories";

//TODO: add a notification icon
//TODO: add a bottomsheet onpress of details tab which shows details of resident
//TODO: add grids for posts, members, and events, chats, notices, posts, announcements, and polls

const Community = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" animated />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 15,
          alignItems: "center",
        }}
      >
        <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
        <Text
          style={{
            fontFamily: "Lobster-Regular",
            fontSize: 25,
            fontWeight: "500",
          }}
        >
          Instagram
        </Text>
        <Feather name="navigation" style={{ fontSize: 24 }} />
      </View>

      <ScrollView>
        <Stories />
        <Post />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Ionic
            name="ios-reload-circle-sharp"
            style={{ fontSize: 60, opacity: 0.2 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Community;
