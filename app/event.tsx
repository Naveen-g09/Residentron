import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";

interface EventItem {
  id: string;
  name: string;
}

const Event = () => {
  const [events, setEvents] = useState<EventItem[]>([
    { id: "1", name: "Event 1" },
    { id: "2", name: "Event 2" },
    // Add more events here...
  ]);

  const renderItem = ({ item }: { item: EventItem }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Event;
