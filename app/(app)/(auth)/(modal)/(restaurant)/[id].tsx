import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RestaurantDetailsPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>RestaurantDetailsPage</Text>
    </View>
  );
};

export default RestaurantDetailsPage;

const styles = StyleSheet.create({});
