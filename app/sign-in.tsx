import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Pressable, TextInput, StyleSheet } from "react-native";
import { useSetRecoilState } from "recoil";

import { signin, signup } from "@/api/auth";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Text } from "@/components/Text";
import { View } from "@/components/View";
import { userAtom } from "@/store";

export default function Auth() {
  const [visible, setVisible] = useState(false);
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const setUser = useSetRecoilState(userAtom);

  const handleForgot = () => {
    Alert.alert("Forgot Password", "Please contact the admin", [
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
      },
    ]);
  };

  const handleSignInSubmit = () => {
    async function signIn() {
      try {
        const response = await axios.post(signin, {
          username,
          password,
        });
        if (response.data.message === "Incorrect creds") {
          console.warn("Incorrect credentials");
        } else {
          setUser(true);
          router.replace("/");
        }
      } catch (error) {
        console.error(error);
      }
    }
    signIn();
  };

  const handleSignUpSubmit = () => {
    async function signUp() {
      try {
        const response = await axios.post(signup, {
          name,
          username,
          password,
        });
        if (response.data.message === "User already exists") {
          console.warn("User already exists");
        } else {
          setUser(true);
          router.replace("/");
        }
      } catch (error) {
        console.error(error);
      }
    }
    signUp();
  };

  return (
    <Container style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.titlePrimary}>to Residentron!</Text>
        <Entypo name="code" size={20} color="#4CAF50" />
      </View>
      <Text style={styles.subtitle}>
        {isSignUp ? "Create your account" : "Sign in to explore your account"}
      </Text>
      {isSignUp ? (
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Enter your name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Your Name"
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Enter your username</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="example name"
                style={styles.input}
                keyboardType="email-address"
                value={username}
                onChangeText={setusername}
              />
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Enter your password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="check caps-lock"
                style={styles.input}
                secureTextEntry={!visible}
                value={password}
                onChangeText={setPassword}
              />
              <FontAwesome5
                name={visible ? "eye" : "eye-slash"}
                size={14}
                color="#4CAF50"
                onPress={() => setVisible((prev) => !prev)}
              />
            </View>
          </View>
          <Button onPress={handleSignUpSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </Button>
          <View style={styles.switch}>
            <Text style={styles.switchText}>Already have an account?</Text>
            <Pressable onPress={() => setIsSignUp(false)}>
              <Text style={styles.link}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Enter your username</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Vicky Kaushal"
                style={styles.input}
                keyboardType="email-address"
                value={username}
                onChangeText={setusername}
              />
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Enter your password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="check caps-lock"
                style={styles.input}
                secureTextEntry={!visible}
                value={password}
                onChangeText={setPassword}
              />
              <FontAwesome5
                name={visible ? "eye" : "eye-slash"}
                size={14}
                color="#4CAF50"
                onPress={() => setVisible((prev) => !prev)}
              />
            </View>
          </View>
          <Button onPress={handleForgot} style={styles.forgotButton}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </Button>
          <Button onPress={handleSignInSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Button>
          <View style={styles.switch}>
            <Text style={styles.switchText}>Don't have an account?</Text>
            <Pressable onPress={() => setIsSignUp(true)}>
              <Text style={styles.link}>Create Now</Text>
            </Pressable>
          </View>
        </View>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    justifyContent: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },
  titlePrimary: {
    fontSize: 24,
    fontWeight: "600",
    color: "#4CAF50",
    marginLeft: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    gap: 15,
  },
  inputGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  input: {
    fontSize: 16,
    color: "#333",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  forgotButton: {
    alignSelf: "flex-end",
  },
  forgotText: {
    color: "#4CAF50",
    fontSize: 14,
  },
  switch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  switchText: {
    color: "#666",
  },
  link: {
    color: "#4CAF50",
    marginLeft: 5,
  },
});
