import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";

import AccountSheet from "../../components/bottomSheet";

//TODO: add a notification icon
//TODO: add a profile icon
//TODO: details grids of profile picture, name, email, phone number, address, and edit button
//TODO: details of flat no, family members, parking, your posts, your events, your polls, your announcements, your notices, your chats, your complaints, your suggestions, your feedbacks, your maintenance, your bills, your payments, your receipts, your orders,
//TODO: current and past utilities, current and past maintenance, current and past bills, current and past orders, current and past payments, current and past receipts, current and past complaints, current and past suggestions, current and past feedbacks, current and past polls, current and past announcements, current and past notices, current and past chats, current and past events, current and past posts, current and past family members, current and past parking, current and past flat no, current and past name, current and past email, current and past phone number, current and past address, current and past profile picture, current and past edit button
//TODO: add a logout button

const account = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { dismiss } = useBottomSheetModal();
  const handleOpenPress = () => bottomSheetRef.current?.present();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleOpenPress}>
        <Text style={styles.buttonText}>Personal Details</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleOpenPress}>
        <Text style={styles.buttonText}>Transactions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleOpenPress}>
        <Text style={styles.buttonText}>Utility</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleOpenPress}>
        <Text style={styles.buttonText}>Request Help</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleOpenPress}>
        <Text style={styles.buttonText}>Calendar</Text>
      </TouchableOpacity>

      {/*        <TouchableOpacity style={styles.button} onPress={handleOpenPress}>
        <Text style={styles.buttonText}>  Edit Access</Text>
      </TouchableOpacity> */}

      <Button title="Dismiss" onPress={() => dismiss()} />

      <AccountSheet ref={bottomSheetRef} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "powderblue",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 5,
    width: "80%",
    height: "10%",
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2, // Shadow offset
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow radius
    elevation: 5,
  },
  image: {
    marginRight: 10,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default account;
