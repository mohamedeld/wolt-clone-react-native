import { useUserStore } from "@/hooks/use-usertore";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const AuthScreen = () => {
  const { setIsGuest } = useUserStore();

  return (
    <View>
      <Text>Auth</Text>
      <Button title="Go login" onPress={() => setIsGuest(false)} />
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
