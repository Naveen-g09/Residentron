import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
// import DateTimePicker from "@react-native-community/datetimepicker";

const AppliancesRepair = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedAppliance, setSelectedAppliance] = useState<string | null>(
    null,
  );
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleRequest = () => {
    if (!selectedDate || !selectedAppliance) {
      Alert.alert("Error", "Please select both a date and an appliance.");
      return;
    }
    // Here you can handle the repair request logic
    console.log("Selected Date:", selectedDate);
    console.log("Selected Appliance:", selectedAppliance);

    // Reset form after submission
    setSelectedDate(null);
    setSelectedAppliance(null);
    Alert.alert("Success", "Repair request submitted successfully!");
  };

  const handleDateChange = (event: any, date?: Date) => {
    setShowDatePicker(false); // Hide picker once the user selects a date
    if (date) setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request Appliance Repair</Text>

      {/* Select Date Section */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Select Date:</Text>
        <TouchableOpacity
          style={styles.datePicker}
          onPress={() => setShowDatePicker(true)} // Show date picker when pressed
        >
          <Text style={styles.dateText}>
            {selectedDate ? selectedDate.toDateString() : "Select Date"}
          </Text>
        </TouchableOpacity>
        {/* {showDatePicker && (
          <DateTimePicker
            value={selectedDate || new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )} */}
      </View>

      {/* Select Appliance Section */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Select Appliance:</Text>
        <DropDownPicker
          open={openDropdown}
          value={selectedAppliance}
          items={[
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
          ]}
          setOpen={setOpenDropdown}
          setValue={setSelectedAppliance}
          placeholder="Select Appliance"
          style={styles.appliancePicker}
          dropDownContainerStyle={styles.dropdownContainer}
        />
      </View>

      {/* Request Repair Button */}
      <TouchableOpacity onPress={handleRequest} style={styles.requestButton}>
        <Text style={styles.buttonText}>Submit Repair Request</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f7f9fb",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#3B82F6", // Blue color
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#374151", // Dark gray for labels
  },
  datePicker: {
    borderWidth: 1,
    borderColor: "#60A5FA", // Light blue border for input
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#E0F2FE", // Light blue background for date picker
  },
  dateText: {
    fontSize: 16,
    color: "#1F2937", // Dark text for date display
  },
  appliancePicker: {
    borderWidth: 1,
    borderColor: "#60A5FA", // Light blue border
    borderRadius: 5,
    backgroundColor: "#E0F2FE", // Light blue background
  },
  dropdownContainer: {
    borderColor: "#60A5FA", // Light blue dropdown border
  },
  requestButton: {
    backgroundColor: "#4CAF50", // Green button background
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 280,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff", // White text on the button
  },
});

export default AppliancesRepair;
