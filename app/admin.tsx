import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, Stack, Tabs } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";

interface UserData {
  name: string;
  email: string;
  phoneNumber: string;
}

const ThirdPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [editMode, setEditMode] = useState(true); // Initialize edit mode to true
  const [userData, setUserData] = useState<UserData | null>(null); // Specify the type of userData

  useEffect(() => {
    loadData(); // Load data from AsyncStorage when component mounts
  }, []);

  const loadData = async () => {
    try {
      const savedData = await AsyncStorage.getItem("userData");
      if (savedData !== null) {
        const parsedData = JSON.parse(savedData);
        setUserData(parsedData);
      }
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  const saveData = async () => {
    try {
      const dataToSave = JSON.stringify({ name, email, phoneNumber });
      await AsyncStorage.setItem("userData", dataToSave);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleSubmit = () => {
    if (editMode) {
      // Update state variables with new values
      setUserData({ name, email, phoneNumber });

      // Save data and switch to display mode
      saveData();
      setEditMode(false);
    } else {
      // Switch to edit mode
      setEditMode(true);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.editNotificationRow}>
            <TouchableOpacity style={{ marginLeft: 20 }} onPress={handleSubmit}>
              <View style={styles.iconOutline}>
                <MaterialIcons name="edit" size={26} color="#24a2bf" />
              </View>
            </TouchableOpacity>
            <View style={styles.spacer} />
            <TouchableOpacity
              style={{ marginRight: 20 }}
              onPress={() => console.log("Notification icon pressed")}
            >
              <View style={styles.iconOutline}>
                <Link href="/notifications" asChild>
                  <MaterialIcons
                    name="notifications"
                    size={26}
                    color="#24a2bf"
                  />
                </Link>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.photoContainer}>
            <View style={styles.userPhotoContainer}>
              {/* <Image
                source={require("../../assets/images/admin.png")}
                style={[styles.userPhoto, { width: 150, height: 150 }]}
              /> */}
            </View>
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Personal Information</Text>
          </View>

          <View style={styles.detailsContainer}>
            {editMode ? (
              <>
                <View style={[styles.inputContainer, styles.nameInput]}>
                  <MaterialIcons name="person" size={24} color="#367C8D" />
                  <TextInput
                    style={[styles.textInput]}
                    placeholder="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                  />
                </View>
                <View style={[styles.inputContainer, styles.emailInput]}>
                  <MaterialIcons name="email" size={24} color="#367C8D" />
                  <TextInput
                    style={[styles.textInput]}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
                </View>
                <View style={[styles.inputContainer]}>
                  <MaterialIcons name="lock" size={24} color="#367C8D" />

                  <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                  />
                </View>
                <View style={[styles.inputContainer, styles.phoneNumberInput]}>
                  <MaterialIcons name="phone" size={24} color="#367C8D" />
                  <TextInput
                    style={styles.textInput}
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                  />
                </View>
              </>
            ) : (
              <>
                <View style={[styles.inputContainer, styles.nameInput]}>
                  <MaterialIcons name="person" size={24} color="#367C8D" />
                  <Text style={styles.userDataLabel}>Name:</Text>
                  <Text style={styles.textInput}>{userData?.name}</Text>
                </View>
                <View style={styles.inputContainer}>
                  <MaterialIcons name="email" size={24} color="#367C8D" />
                  <Text style={styles.userDataLabel}>Email:</Text>
                  <Text style={styles.textInput}>{userData?.email}</Text>
                </View>
                <View style={[styles.inputContainer, styles.phoneNumberInput]}>
                  <MaterialIcons name="phone" size={24} color="#367C8D" />
                  <Text style={styles.userDataLabel}>Phone Number:</Text>
                  <Text style={styles.textInput}>{userData?.phoneNumber}</Text>
                </View>
              </>
            )}
            {editMode && (
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingTop: 20,
    flexGrow: 1,
    paddingBottom: 20,
    // Padding to ensure content isn't obscured by keyboard
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 60, // Rounded top-left corner
    borderTopRightRadius: 60, // Rounded top-right corner
    backgroundColor: "#FFFFFF",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  userDataContainer: {
    backgroundColor: "#E0E0E0",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  userDataLabel: {
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 15,
  },
  userDataText: {
    flex: 1,
    color: "blue",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#24a2bf",
    height: 35,
    width: "50%",
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  editNotificationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0,
    width: "100%",
    paddingHorizontal: 20,
  },
  iconOutline: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#24a2bf",
    justifyContent: "center",
    alignItems: "center",
  },
  spacer: {
    width: 10,
  },
  photoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  userPhotoContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
  },
  userPhoto: {
    width: "100%",
    height: "100%",
    borderRadius: 75,
  },
  header: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#24a2bf",
  },
  detailsContainer: {
    width: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 5,
    backgroundColor: "#EAEAEA",
    paddingHorizontal: 25,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 15,
  },
  emailInput: {
    backgroundColor: "#EAEAEA",
  },
  phoneNumberInput: {
    backgroundColor: "#EAEAEA",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  nameInput: {
    backgroundColor: "#EAEAEA",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  passwordInput: {
    backgroundColor: "#EAEAEA",
  },
});

export default ThirdPage;