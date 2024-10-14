import { Stack } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Help = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedFrequency, setSelectedFrequency] = useState<string | null>(
    null,
  );

  const handleServiceSelection = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleFrequencySelection = (frequency: string) => {
    setSelectedFrequency(frequency);
  };

  const handleBooking = () => {
    console.log("Selected Services:", selectedServices);
    console.log("Selected Frequency:", selectedFrequency);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: "Everyday Help" }} />
      <View style={styles.section}>
        <Text style={styles.title}>Choose Services</Text>
        <View style={styles.buttonGroup}>
          {[
            "Maid",
            "Cleaning",
            "Cook",
            "Baby Sitter",
            "Nanny",
            "Elderly Care",
            "Pet Care",
          ].map((service) => (
            <TouchableOpacity
              key={service}
              onPress={() => handleServiceSelection(service)}
              style={[
                styles.button,
                selectedServices.includes(service) && styles.selectedButton,
              ]}
            >
              <Text style={styles.buttonText}>{service}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Choose Frequency</Text>
        <View style={styles.buttonGroup}>
          {["Weekly", "Monthly"].map((frequency) => (
            <TouchableOpacity
              key={frequency}
              onPress={() => handleFrequencySelection(frequency)}
              style={[
                styles.button,
                selectedFrequency === frequency && styles.selectedButton,
              ]}
            >
              <Text style={styles.buttonText}>{frequency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity onPress={handleBooking} style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book</Text>
      </TouchableOpacity>
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
