import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const AppliancesRepair = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedAppliance, setSelectedAppliance] = useState<
    string | undefined
  >(undefined);

  const handleRequest = () => {
    if (!selectedDate || !selectedAppliance) {
      alert("Please select a date and an appliance.");
      return;
    }
    // Here you can handle the repair request logic
    console.log("Selected Date:", selectedDate);
    console.log("Selected Appliance:", selectedAppliance);
    // Reset form after submission
    setSelectedDate(null);
    setSelectedAppliance(undefined);
    alert("Repair request submitted successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request Repair</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Select Date:</Text>
        <TouchableOpacity
          style={styles.datePicker}
          onPress={() => console.log("Open Date Picker")}
        >
          <Text>
            {selectedDate ? selectedDate.toDateString() : "Select Date"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Select Appliance:</Text>
        <DropDownPicker
          open={selectedAppliance !== null}
          value={selectedAppliance !== undefined ? selectedAppliance : null}
          items={[
            { label: "Select Appliance", value: undefined },
            { label: "Fan", value: "Fan" },
            { label: "Light", value: "Light" },
            { label: "Motor", value: "Motor" },
            { label: "Refrigerator", value: "Refrigerator" },
            { label: "Washing Machine", value: "Washing Machine" },
            { label: "Air Conditioner", value: "Air Conditioner" },
            { label: "Microwave", value: "Microwave" },
            { label: "Oven", value: "Oven" },
            { label: "Dishwasher", value: "Dishwasher" },
            { label: "Water Heater", value: "Water Heater" },
            { label: "Others", value: "Others" },

            // Add more appliances as needed
          ]}
          setOpen={() => setSelectedAppliance(undefined)}
          setValue={(value) => setSelectedAppliance(value)}
          style={styles.appliancePicker}
          containerStyle={{ height: 40 }}
          zIndex={5000}
        />
      </View>
      <TouchableOpacity onPress={handleRequest} style={styles.requestButton}>
        <Text style={styles.buttonText}>Request Repair</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  datePicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  appliancePicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  requestButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default AppliancesRepair;
