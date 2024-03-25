import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="Auth" options={{headerShown:false}}/>
        <Stack.Screen name="Account" options={{headerShown:false}}  />
    </Stack>
  )
}

export default AuthLayout