import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AppleAuthBtn = () => {
  return (
    <TouchableOpacity style={styles.appleBtn}>
      <Ionicons name="logo-apple" size={18} color={"#fff"} />
      <Text style={styles.appleBtnText}>Sign in with Apple</Text>
    </TouchableOpacity>
  );
};

export default AppleAuthBtn;

const styles = StyleSheet.create({
  appleBtn: {
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  appleBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
