import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="Auth" options={{ headerShown: false }} />
      <Stack.Screen name="Account" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
