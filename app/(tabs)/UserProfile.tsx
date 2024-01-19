import React from "react";
import { View, Text, TextInput, TouchableWithoutFeedback, Modal, Button } from "react-native";

import { useState } from "react";

const UserProfileScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View className="m-5">
      <TouchableWithoutFeedback onPress={handlePress}>
      <View className="h-40 w-full bg-lime-200 m-2">
        <Text className="text-center">Blood Pressure</Text>
      </View>
      </TouchableWithoutFeedback>
      <View className="flex-row h-60">
        <View className="w-1/3 bg-green-200 mr-2">
          <Text className=" text-center ">Height</Text>
        </View>
        <View className="w-2/3 bg-red-200">
          <Text className=" text-center ">Weight</Text>
        </View>
      </View>
      <View className="flex-row h-60 m-2">
        <View className="w-2/3 bg-red-400 mr-2">
          <Text>Heart Rate</Text>
        </View>
        <View className="w-1/3 bg-blue-200">
          <Text>General Summary</Text>
        </View>
      </View>
      <View>
        <TextInput
          className="border border-gray-300 p-2"
          placeholder="Ask Ella Anything"
        />
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Modal Content</Text>
          <Button title="Close Modal" onPress={handleCloseModal} />
        </View>
      </Modal>
    </View>
  );
};

export default UserProfileScreen;
