import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from "react-native";

import AccountSheet from "@/components/bottomSheet"; // Custom bottom sheet component

const { width } = Dimensions.get("window"); // Get screen width to make the button full-width

const Amenities = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [selectedAmenity, setSelectedAmenity] = useState<{
    name: string;
    image: any;
  } | null>(null); // Store selected amenity
  const { dismiss } = useBottomSheetModal();

  const handlePresentModalPress = (amenity: string, image: any) => {
    setSelectedAmenity({ name: amenity, image }); // Set the selected amenity
    bottomSheetRef.current?.present(); // Open the bottom sheet
  };

  const handlePress = (amenity: string) => {
    Alert.alert(
      "Booking Confirmed",
      `Booked ${amenity} for you this weekend! ✅`,
      [{ text: "OK", onPress: () => dismiss() }],
      { cancelable: false },
    );
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: "Amenities" }} />

      {/* Amenity buttons */}
      <TouchableOpacity
        onPress={() =>
          handlePresentModalPress(
            "Swimming Pool",
            require("@/assets/images/swimming_pool.jpg"),
          )
        }
        style={styles.button}
      >
        <Image
          source={require("@/assets/images/swimming_pool.jpg")}
          style={styles.image}
        />
        <Text style={styles.buttonText}>Swimming Pool</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          handlePresentModalPress("Gym", require("@/assets/images/gym.jpg"))
        }
        style={styles.button}
      >
        <Image
          source={require("@/assets/images/gym.jpg")}
          style={styles.image}
        />
        <Text style={styles.buttonText}>Gym</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          handlePresentModalPress(
            "Club House",
            require("@/assets/images/club_house.jpg"),
          )
        }
        style={styles.button}
      >
        <Image
          source={require("@/assets/images/club_house.jpg")}
          style={styles.image}
        />
        <Text style={styles.buttonText}>Club House</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          handlePresentModalPress(
            "Tennis Court",
            require("@/assets/images/tennis_court.jpg"),
          )
        }
        style={styles.button}
      >
        <Image
          source={require("@/assets/images/tennis_court.jpg")}
          style={styles.image}
        />
        <Text style={styles.buttonText}>Tennis Court</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          handlePresentModalPress(
            "Basketball Court",
            require("@/assets/images/basketball_court.jpg"),
          )
        }
        style={styles.button}
      >
        <Image
          source={require("@/assets/images/basketball_court.jpg")}
          style={styles.image}
        />
        <Text style={styles.buttonText}>Basketball Court</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          handlePresentModalPress(
            "Badminton Court",
            require("@/assets/images/badminton_court.jpg"),
          )
        }
        style={styles.button}
      >
        <Image
          source={require("@/assets/images/badminton_court.jpg")}
          style={styles.image}
        />
        <Text style={styles.buttonText}>Badminton Court</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          handlePresentModalPress(
            "Squash Court",
            require("@/assets/images/squash_court.jpg"),
          )
        }
        style={styles.button}
      >
        <Image
          source={require("@/assets/images/squash_court.jpg")}
          style={styles.image}
        />
        <Text style={styles.buttonText}>Squash Court</Text>
      </TouchableOpacity>

      {/* Bottom Sheet for displaying selected amenity */}
      <AccountSheet ref={bottomSheetRef}>
        {selectedAmenity && (
          <View style={styles.bottomSheetContent}>
            <Image
              source={selectedAmenity.image}
              style={styles.bottomSheetImage}
            />
            <Text style={styles.selectedAmenityText}>
              {selectedAmenity.name}
            </Text>
          </View>
        )}
        {/* Book Button */}
        <TouchableOpacity
          onPress={() => handlePress(selectedAmenity?.name || "Amenity")}
          style={styles.bookButton}
        >
          <Text style={styles.bookButtonText}>Book</Text>
        </TouchableOpacity>
      </AccountSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: "powderblue",
    borderRadius: 5,
    width: "100%",
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2, // Shadow offset
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow radius
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10, // Space between image and text
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 5, // Optional rounded corners for the image
  },
  bottomSheetContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  bottomSheetImage: {
    width: 300, // Larger image size
    height: 300, // Larger image size
    marginBottom: 20, // Space between image and button
    borderRadius: 10, // Slightly rounded corners
    shadowColor: "#000", // Add shadow to the image
    shadowOffset: {
      width: 0,
      height: 2, // Shadow offset
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 5, // Shadow radius
    elevation: 10, // Elevation for Android shadow
  },
  selectedAmenityText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  bookButton: {
    position: "relative", // Position at the bottom
    bottom: -50, // Align to the very bottom
    alignItems: "center", // Center the button
    left: 0, // Align to the left
    right: 0, // Align to the right
    marginHorizontal: 100, // Center the button
    paddingVertical: 10, // Add padding to the button
    backgroundColor: "#2196F3", // Blue color for the booking button
    width: 100, // Make it full width
  },
  bookButtonText: {
    fontSize: 18, // Smaller font size
    fontWeight: "bold",
    color: "#ffffff", // White text color for button
  },
});

export default Amenities;
