import { useUserStore } from "@/hooks/use-usertore";
import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const AuthScreen = () => {
  const { setIsGuest } = useUserStore();

  return (
    <View>
      <Text>Auth</Text>
      <Button title="Go login" onPress={() => setIsGuest(false)} />
      <Link href={"/(app)/(auth)/(tabs)/profile"}>Profile</Link>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
