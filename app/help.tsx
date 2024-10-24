import { Stack } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RNImmediatePhoneCall from "react-native-immediate-phone-call";

const Help = () => {
  const servicesWithNumbers: { [key: string]: string } = {
    Maid: "9819618472",
    Cleaning: "7208208480",
    Cook: "8806795560",
    "Baby Sitter": "9123456782",
    Nanny: "9819618472",
    "Elderly Care": "+91 72082 08480",
    "Pet Care": "8806795560",
  };

  const handleServiceCall = (service: string) => {
    const phoneNumber = servicesWithNumbers[service];
    if (phoneNumber) {
      RNImmediatePhoneCall.immediatePhoneCall(phoneNumber); // Make the call
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: "Everyday Help" }} />
      <View style={styles.section}>
        <Text style={styles.title}>Choose Services</Text>
        <View style={styles.buttonGroup}>
          {Object.keys(servicesWithNumbers).map((service) => (
            <TouchableOpacity
              key={service}
              onPress={() => handleServiceCall(service)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{service}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8", // Light background color for contrast
  },
  section: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Darker color for the title
    marginBottom: 15,
  },
  buttonGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#e0e0e0",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2, // Shadow offset
    },
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3.5, // Shadow radius
    elevation: 5, // Elevation for Android
  },
  selectedButton: {
    backgroundColor: "#4CAF50", // Green for selected
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000", // Text color for button
  },
  bookButton: {
    paddingVertical: 15,
    backgroundColor: "#2196F3", // Blue color for the booking button
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 4, // Shadow offset
    },
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 6, // Elevation for Android
  },
  bookButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff", // White text color for button
  },
});

export default Help;
