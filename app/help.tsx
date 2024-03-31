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
    // Here you can handle the booking logic based on selected services and frequency
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
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#dddddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#4CAF50",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bookButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: "powderblue",
    borderRadius: 5,
    width: "100%",
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
  bookButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center",
    color: "#000",
  },
});

export default Help;
