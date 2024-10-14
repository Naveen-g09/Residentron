import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  FlatList,
} from "react-native";

interface EventItem {
  id: string;
  name: string;
}

// Component
const Event = () => {
  const [events, setEvents] = useState<EventItem[]>([
    { id: "1", name: "Community Meeting" },
    { id: "2", name: "Pool Party" },
    { id: "3", name: "Yoga Session" },
    { id: "4", name: "Cooking Workshop" },
    { id: "5", name: "Gardening Club" },
    { id: "6", name: "Book Reading" },
    { id: "7", name: "Art Exhibition" },
    { id: "8", name: "Charity Drive" },
    { id: "9", name: "Chess Tournament" },
    { id: "10", name: "Garage Sale" },
    { id: "11", name: "Movie Night" },
    { id: "12", name: "Music Concert" },
    { id: "13", name: "Cycling Event" },
    { id: "14", name: "Photography Workshop" },
    { id: "15", name: "Tennis Match" },
  ]);

  // Function to handle event press
  const handleEventPress = (eventName: string) => {
    Alert.alert(
      `${eventName}`,
      "There is an event in Building No. 2 today, Room 4!",
    );
  };

  // Render each event item in two columns
  const renderItem = ({ item }: { item: EventItem }) => (
    <TouchableOpacity
      style={styles.eventBox}
      onPress={() => handleEventPress(item.name)}
    >
      <Text style={styles.eventText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display two columns
        columnWrapperStyle={styles.row} // Style the rows of two columns
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 10,
  },
  row: {
    justifyContent: "space-between", // Evenly space the items in a row
  },
  eventBox: {
    backgroundColor: "dodgerblue",
    padding: 20,
    borderRadius: 10,
    width: "45%", // Take up 45% of the screen width for each box
    marginBottom: 15, // Add space between rows
    alignItems: "center", // Center text inside the box
  },
  eventText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Event;
