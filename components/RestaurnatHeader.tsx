import { Colors } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { SharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type RestaurnatHeader = {
  title: string;
  scrollOffset: SharedValue<number>;
};

const RestaurnatHeader = ({ scrollOffset, title }: RestaurnatHeader) => {
  const insets = useSafeAreaInsets();
  return (
    <Animated.View
      style={[
        styles.headerContainer,
        {
          paddingTop: insets?.top,
        },
      ]}
    >
      <Animated.View style={[styles.header1]}>
        <Link href={"/(app)/(auth)/(modal)/location"} asChild>
          <TouchableOpacity style={styles.locationBtn}>
            <View style={styles.locationBtnIcon}>
              <Ionicons name="business-outline" size={16} />
            </View>
            <Text style={styles.locationTxt}>Munster</Text>
            <Ionicons name="chevron-down" size={16} />
          </TouchableOpacity>
        </Link>
        <View style={styles.rightIcon}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="filter" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="map-outline" size={20} />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Animated.View style={[styles.header2]}>
        <View style={styles.centerContent}>
          <Text style={styles.titleSm}>{title}</Text>
          <Link href={"/(app)/(auth)/(modal)/location"} asChild>
            <TouchableOpacity style={styles.locationSm}>
              <Text style={styles.locationSmTxt}>Munster</Text>
              <Ionicons name="chevron-down" size={14} />
            </TouchableOpacity>
          </Link>
        </View>
        <View style={styles.rightIcon}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="filter" size={20} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default RestaurnatHeader;

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    zIndex: 999,
    boxShadow: "0px 2px 4px -2px rgba(0,0,0,0.2)",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 4,
  },
  header1: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 20,
  },
  locationBtnIcon: {
    borderRadius: 20,
    backgroundColor: Colors.light,
    padding: 10,
  },
  locationTxt: {
    fontSize: 14,
    fontWeight: "600",
  },
  rightIcon: {
    flexDirection: "row",
    gap: 8,
  },
  iconBtn: {
    width: 40,
    height: 40,
    backgroundColor: Colors.light,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  header2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 40,
  },
  titleSm: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 2,
  },
  locationSm: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  locationSmTxt: {
    fontSize: 12,
    color: "#666",
  },
});
