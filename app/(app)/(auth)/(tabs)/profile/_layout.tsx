import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const ProfileLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Profile",
          headerLargeTitle: true,
          headerTransparent: true,
        }}
      />
    </Stack>
  );
};

export default ProfileLayout;

const styles = StyleSheet.create({});
