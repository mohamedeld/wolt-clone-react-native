import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const ResturantsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ResturantsLayout;

const styles = StyleSheet.create({});
