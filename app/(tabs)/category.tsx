import { View, Text, Button, ScrollView, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

//TODO: add a notification icon
//TODO: add 4 rectangle grid buttons which has options of everyday help, appliance repair, home cleaning, and moving
//TODO: add a search bar

const category = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Link href={"/ameneties"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ameneties</Text>
        </TouchableOpacity>
      </Link>

      <Link href={"/help"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Everyday Help</Text>
        </TouchableOpacity>
      </Link>

      <Link href={"/repair"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Appliances Repair</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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

export default category;
