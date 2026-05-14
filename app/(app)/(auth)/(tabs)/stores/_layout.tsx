import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const StoresLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default StoresLayout;

const styles = StyleSheet.create({});
