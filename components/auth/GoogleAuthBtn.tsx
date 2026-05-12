import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
const GoogleAuthBtn = () => {
  return (
    <TouchableOpacity style={styles.googleBtn}>
      <Ionicons name="logo-google" size={18} color={"#fff"} />
      <Text style={styles.googleBtnText}>Continue with google</Text>
    </TouchableOpacity>
  );
};

export default GoogleAuthBtn;

const styles = StyleSheet.create({
  googleBtn: {
    backgroundColor: "#4285f4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  googleBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
