import AppleAuthBtn from "@/components/auth/AppleAuthBtn";
import FacebookAuthBtn from "@/components/auth/FacebookAuthBtn";
import GoogleAuthBtn from "@/components/auth/GoogleAuthBtn";
import { Colors, Fonts } from "@/constants/theme";
import { useUserStore } from "@/hooks/use-usertore";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
const OtherOptionsScreen = () => {
  const router = useRouter();
  const { setIsGuest } = useUserStore();

  const handlePress = () => {
    router.dismiss();
  };

  const handleContinueAsGuest = () => {
    setIsGuest(true);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeBtn} onPress={handlePress}>
        <Ionicons name="close" size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>Login or create a Wolt account</Text>
      <View style={styles.btnsContainer}>
        <Animated.View entering={FadeInDown.delay(100)}>
          <AppleAuthBtn />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200)}>
          <GoogleAuthBtn />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(300)}>
          <FacebookAuthBtn />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(400)}>
          <TouchableOpacity
            style={styles.otherOptions}
            onPress={handleContinueAsGuest}
          >
            <Text style={styles.otherBtnText}>Continue as guest</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default OtherOptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  closeBtn: {
    backgroundColor: Colors.light,
    borderRadius: 40,
    padding: 8,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 30,
    fontFamily: Fonts.brandBlack,
    marginVertical: 22,
  },
  btnsContainer: {
    gap: 12,
    width: "100%",
  },
  otherOptions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  otherBtnText: {
    color: Colors.secondary,
    fontSize: 18,
    fontWeight: "600",
  },
});
