import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type RestuarantDetailsHeader = {
  scrollOffset: SharedValue<number>;
};
const SCROLL_THREASHOLD_START = 50;
const SCROLL_THREASHOLD_END = 80;
const RestuarantDetailsHeader = ({ scrollOffset }: RestuarantDetailsHeader) => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const headerStyle = useAnimatedStyle(() => {
    const backgroundOpacity = interpolate(
      scrollOffset.value,
      [SCROLL_THREASHOLD_START, SCROLL_THREASHOLD_END],
      [0, 1],
      Extrapolation.CLAMP,
    );
    const shadowOpacity = interpolate(
      scrollOffset.value,
      [SCROLL_THREASHOLD_START, SCROLL_THREASHOLD_END],
      [0, 0.1],
      Extrapolation.CLAMP,
    );
    return {
      backgroundColor: `rgba(255,255,255,${backgroundOpacity})`,
      shadowOpacity,
    };
  });

  const searchBarStyle = useAnimatedStyle(() => {
    const backgroundOpacity = interpolate(
      scrollOffset.value,
      [0, SCROLL_THREASHOLD_START],
      [0.9, 1],
      Extrapolation.CLAMP,
    );

    return {
      backgroundColor: `rgba(245,245,245,${backgroundOpacity})`,
    };
  });
  const btnStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [0, SCROLL_THREASHOLD_END],
      [1, 0],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
    };
  });
  const btnStyle2 = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [SCROLL_THREASHOLD_START * 0.3, SCROLL_THREASHOLD_END],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
    };
  });
  return (
    <Animated.View
      style={[
        styles.headerContainer,
        headerStyle,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <View style={[styles.headerContent]}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={25} />
        </TouchableOpacity>
        <Animated.View style={[styles.searchBar, searchBarStyle]}>
          <Ionicons name="search" size={20} color={Colors.muted} />
          <TextInput
            style={{
              fontSize: 15,
            }}
            placeholder="Search"
            placeholderTextColor={Colors.muted}
          />
        </Animated.View>
        <View
          style={{
            width: 40,
            height: 40,
          }}
        />
        <Animated.View style={[styles.iconBtn, btnStyle]}>
          <Ionicons name="heart-outline" size={24} />
        </Animated.View>
        <Animated.View style={[styles.iconBtn, btnStyle2]}>
          <Ionicons name="ellipsis-horizontal" size={24} />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default RestuarantDetailsHeader;

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99999999,
    boxShadow: "0px 4px 2px -2px rgba(0, 0, 0, 0.05)",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.light,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 2px -2px rgba(0, 0, 0, 0.1)",
  },
  searchBar: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 8,
    borderRadius: 20,
  },
  iconBtn: {
    position: "absolute",
    top: 12,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.light,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 2px -2px rgba(0, 0, 0, 0.1)",
  },
});
