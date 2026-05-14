import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Feed" }} />
    </Stack>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
