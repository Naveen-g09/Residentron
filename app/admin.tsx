import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Admin = () => {
  return (
    <View style={styles.container}>
      <Link href="/varsha" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Varsha Apt</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/GoodWill" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Good Will Avenue</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Neelkamal" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Neelkamal Apt</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Neelgiri" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Neelgiri Apt</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Admin;
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
