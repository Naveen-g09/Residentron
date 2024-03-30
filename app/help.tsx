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
      <View>
        <Text style={styles.title}>Choose Services</Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleServiceSelection("Maid")}
            style={[
              styles.serviceButton,
              selectedServices.includes("Maid") && styles.selectedService,
            ]}
          >
            <Text style={styles.serviceButtonText}>Maid</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleServiceSelection("Cleaning")}
            style={[
              styles.serviceButton,
              selectedServices.includes("Cleaning") && styles.selectedService,
            ]}
          >
            <Text style={styles.serviceButtonText}>Cleaning</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleServiceSelection("Cook")}
            style={[
              styles.serviceButton,
              selectedServices.includes("Cook") && styles.selectedService,
            ]}
          >
            <Text style={styles.serviceButtonText}>Cook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleServiceSelection("Baby Sitter")}
            style={[
              styles.serviceButton,
              selectedServices.includes("Baby Sitter") &&
                styles.selectedService,
            ]}
          >
            <Text style={styles.serviceButtonText}>Baby Sitter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleServiceSelection("Nanny")}
            style={[
              styles.serviceButton,
              selectedServices.includes("Nanny") && styles.selectedService,
            ]}
          >
            <Text style={styles.serviceButtonText}>Nanny</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleServiceSelection("Elderly Care")}
            style={[
              styles.serviceButton,
              selectedServices.includes("Elderly Care") &&
                styles.selectedService,
            ]}
          >
            <Text style={styles.serviceButtonText}>Elderly Care</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleServiceSelection("Pet Care")}
            style={[
              styles.serviceButton,
              selectedServices.includes("Pet Care") && styles.selectedService,
            ]}
          >
            <Text style={styles.serviceButtonText}>Pet Care</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.title}>Choose Frequency</Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleFrequencySelection("Weekly")}
            style={[
              styles.frequencyButton,
              selectedFrequency === "Weekly" && styles.selectedFrequency,
            ]}
          >
            <Text style={styles.frequencyButtonText}>Weekly</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleFrequencySelection("Monthly")}
            style={[
              styles.frequencyButton,
              selectedFrequency === "Monthly" && styles.selectedFrequency,
            ]}
          >
            <Text style={styles.frequencyButtonText}>Monthly</Text>
          </TouchableOpacity>
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
    // backgroundColor: "#ffffff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  serviceButton: {
    backgroundColor: "#dddddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  selectedService: {
    backgroundColor: "#4CAF50",
  },
  serviceButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  frequencyButton: {
    backgroundColor: "#dddddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: "45%",
  },
  selectedFrequency: {
    backgroundColor: "#4CAF50",
  },
  frequencyButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bookButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  bookButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default Help;
