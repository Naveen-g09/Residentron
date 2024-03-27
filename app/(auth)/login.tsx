import { Stack } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { supabase } from "../lib/supabase-client";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert("Sign In Error", error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) Alert.alert("Sign Up Error", error.message);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "Residentron" }} />
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TouchableOpacity
          disabled={loading}
          onPress={() => signInWithEmail()}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.verticallySpaced}>
        <TouchableOpacity
          disabled={loading}
          onPress={() => signUpWithEmail()}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "powderblue",
    paddingHorizontal: 20,
  },
  verticallySpaced: {
    paddingTop: 8,
    paddingBottom: 8,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: "#0052cc",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    margin: 8,
    elevation: 4, // Add elevation for a raised effect
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  textInput: {
    backgroundColor: "#f0f0f0", // Light background color for input field
    borderColor: "#ccc",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    margin: 8,
    width: "100%",
  },
});
