import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import CalenderSheet from "@/components/calenderBS";

const Community = () => {
  const calenderBottomSheetRef = useRef<BottomSheetModal>(null);
  const handleCalenderPress = () => calenderBottomSheetRef.current?.present();

  const { dismiss } = useBottomSheetModal();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCalenderPress}>
        <Text style={styles.buttonText}>Calendar</Text>
      </TouchableOpacity>
      <Link href="/Members" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Members</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Notices" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Notices</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/connect" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Posts</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Announcement" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Announcement</Text>
        </TouchableOpacity>
      </Link>
      <CalenderSheet ref={calenderBottomSheetRef} />
    </View>
  );
};

export default Community;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "powderblue",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: "powderblue",
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
