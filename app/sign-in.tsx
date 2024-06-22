import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Pressable, TextInput } from "react-native";
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

  const handleBack = () => {
    console.warn("Back to home");
  };

  const handleSignInSubmit = () => {
    async function signIn() {
      try {
        const response = await axios.post(signin, {
          username,
          password,
        });
        console.log("return from server", response.data);
        if (response.data.message === "Incorrect creds") {
          // Handle incorrect credentials
          console.warn("Incorrect credentials");
        } else {
          //TODO: save the token in the local storage, add expiration in the backend and form logic from here
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
        console.log(response.data);
        if (response.data.message === "User already exists") {
          // Handle user already exists
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
    <Container>
      {/* <View className="py-5">
                <Ionicons name="arrow-back" size={24} onPress={handleBack} />
            </View> */}
      <View className="gap-10 p-5">
        <View className="gap-2">
          <View className="flex-row items-center gap-1">
            <Text className="text-2xl font-semibold">Welcome</Text>
            <Text className="text-2xl font-semibold" variant="primary">
              to Residentron!
            </Text>
            <Entypo name="code" size={20} />
          </View>
          <Text variant="secondary">
            {isSignUp
              ? "Create your account"
              : "Sign in to explore your account"}
          </Text>
        </View>
        {isSignUp ? (
          <View className="gap-4">
            <View className="gap-1.5">
              <Text size="sm" variant="secondary">
                Enter your name
              </Text>
              <View variant="secondary" className="rounded px-5 py-2">
                <TextInput
                  placeholder="Your Name"
                  className="text-base text-foreground placeholder:text-secondary-foreground"
                  value={name}
                  onChangeText={setName}
                />
              </View>
            </View>
            <View className="gap-1.5">
              <Text size="sm" variant="secondary">
                Enter your username
              </Text>
              <View variant="secondary" className="rounded px-5 py-2">
                <TextInput
                  placeholder="example name"
                  className="text-base text-foreground placeholder:text-secondary-foreground"
                  keyboardType="email-address"
                  value={username}
                  onChangeText={setusername}
                />
              </View>
            </View>
            <View className="gap-1.5">
              <Text size="sm" variant="secondary">
                Enter your password
              </Text>
              <View
                variant="secondary"
                className="flex-row items-center rounded px-5 py-2"
              >
                <TextInput
                  placeholder="check caps-lock"
                  className="flex-1 text-base text-foreground placeholder:text-secondary-foreground"
                  secureTextEntry={!visible}
                  value={password}
                  onChangeText={setPassword}
                />
                <FontAwesome5
                  name={visible ? "eye" : "eye-slash"}
                  size={14}
                  onPress={() => {
                    setVisible((prev) => !prev);
                  }}
                />
              </View>
            </View>
            <Button
              onPress={handleSignUpSubmit}
              className="active:bg-primary/70"
            >
              <Text variant="primary-lite">Create Account</Text>
            </Button>
            <View className="flex-row justify-center gap-1">
              <Text variant="secondary">Already have an account?</Text>
              <Pressable onPress={() => setIsSignUp(false)}>
                <Text variant="accent">Sign In</Text>
              </Pressable>
            </View>
          </View>
        ) : (
          <View className="gap-4">
            <View className="gap-1.5">
              <Text size="sm" variant="secondary">
                Enter your username
              </Text>
              <View variant="secondary" className="rounded px-5 py-2">
                <TextInput
                  placeholder="test@example.com"
                  className="text-base text-foreground placeholder:text-secondary-foreground"
                  keyboardType="email-address"
                  value={username}
                  onChangeText={setusername}
                />
              </View>
            </View>
            <View className="gap-1.5">
              <Text size="sm" variant="secondary">
                Enter your password
              </Text>
              <View
                variant="secondary"
                className="flex-row items-center rounded px-5 py-2"
              >
                <TextInput
                  placeholder="check caps-lock"
                  className="flex-1 text-base text-foreground placeholder:text-secondary-foreground"
                  secureTextEntry={!visible}
                  value={password}
                  onChangeText={setPassword}
                />
                <FontAwesome5
                  name={visible ? "eye" : "eye-slash"}
                  size={14}
                  onPress={() => {
                    setVisible((prev) => !prev);
                  }}
                />
              </View>
            </View>
            <Button
              className="items-end px-0 py-0 min-h-0"
              onPress={handleForgot}
            >
              <Text size="sm" variant="accent">
                Forgot Password
              </Text>
            </Button>
            <Button
              onPress={handleSignInSubmit}
              className="active:bg-primary/70"
            >
              <Text variant="primary-lite">Sign In</Text>
            </Button>
            <View className="flex-row justify-center gap-1">
              <Text variant="secondary">Don't have an account?</Text>
              <Pressable onPress={() => setIsSignUp(true)}>
                <Text variant="accent">Create Now</Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </Container>
  );
}
