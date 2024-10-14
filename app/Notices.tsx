import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";

// Define the type for a notice
interface Notice {
  id: string;
  text: string;
  color: string;
}

const notices: Notice[] = [
  {
    id: "1",
    text: "There will be a water cut every Monday evening from now on. Government notice.",
    color: "#ffcccb",
  },
  {
    id: "2",
    text: "Please make sure to pay the society maintenance charge on time.",
    color: "#add8e6",
  },
  {
    id: "3",
    text: "Planting drive this Sunday morning at 8 AM.",
    color: "#90ee90",
  },
  {
    id: "4",
    text: "Annual general meeting on Friday at 6 PM. All members are requested to attend.",
    color: "#ffebcd",
  },
  {
    id: "5",
    text: "Reminder: Garbage collection is every Thursday morning.",
    color: "#ffe4b5",
  },
  {
    id: "6",
    text: "Yoga sessions every Saturday morning at 7 AM in the community hall.",
    color: "#d3d3d3",
  },
  {
    id: "7",
    text: "New parking rules will be enforced starting next week. Please read the guidelines.",
    color: "#f5deb3",
  },
  {
    id: "8",
    text: "Upcoming movie night: Join us for a fun movie night on Saturday at 7 PM.",
    color: "#e6e6fa",
  },
];

const NoticeBoard = () => {
  // Define the opacity state outside the renderItem
  const opacity = useState(new Animated.Value(1))[0];

  const handlePressIn = () => {
    Animated.timing(opacity, {
      toValue: 0.8, // Reduce opacity when pressed
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(opacity, {
      toValue: 1, // Reset opacity when released
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const renderItem = ({ item }: { item: Notice }) => {
    return (
      <Animated.View
        style={[
          styles.noticeContainer,
          { backgroundColor: item.color, opacity },
        ]}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Text style={styles.noticeText}>{item.text}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notice Board</Text>
      <FlatList
        data={notices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  noticeContainer: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 10, // Increased margin
    elevation: 2,
    width: "100%", // Make it wider
  },
  noticeText: {
    fontSize: 16,
    color: "#333",
  },
  list: {
    paddingBottom: 20,
  },
});

export default NoticeBoard;
