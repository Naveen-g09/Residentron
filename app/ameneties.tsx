import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AccountSheet from "@/components/bottomSheet";

const Amenities = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { dismiss } = useBottomSheetModal();

  const handlePresentModalPress = () => bottomSheetRef.current?.present();

  const handlePress = (amenity: string) => {
    console.log(`Booked ${amenity}`);
    // Add your booking logic here...
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amenities</Text>
      <TouchableOpacity onPress={handlePresentModalPress} style={styles.button}>
        <Text style={styles.buttonText}>Swimming Pool</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePresentModalPress} style={styles.button}>
        <Text style={styles.buttonText}>Gym</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePresentModalPress} style={styles.button}>
        <Text style={styles.buttonText}>Club House</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePresentModalPress} style={styles.button}>
        <Text style={styles.buttonText}>Tennis Court</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePresentModalPress} style={styles.button}>
        <Text style={styles.buttonText}>Basket Ball Court</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePresentModalPress} style={styles.button}>
        <Text style={styles.buttonText}>Badminton Court</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePresentModalPress} style={styles.button}>
        <Text style={styles.buttonText}>Squash Court</Text>
      </TouchableOpacity>
      <AccountSheet ref={bottomSheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Amenities;
