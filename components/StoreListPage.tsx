import { Fonts } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CategoryList } from "./CategoryList";
import RestaurantsList from "./RestaurantsList";
import RestaurnatHeader from "./RestaurnatHeader";

const HEADER_HEIGHT = 60;
const StoreListPage = () => {
  const insets = useSafeAreaInsets();
  const scrollOffset = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollOffset.value = event.contentOffset.y;
    },
  });
  return (
    <View style={styles.container}>
      <RestaurnatHeader title="Stores" scrollOffset={scrollOffset} />
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets?.top + HEADER_HEIGHT,
        }}
      >
        <Text style={styles.pageTitle}>Store</Text>
        <CategoryList />
        <Text style={styles.allRestaurantsTitle}>All Stores</Text>
        <RestaurantsList />
      </Animated.ScrollView>
    </View>
  );
};

export default StoreListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTitle: {
    fontFamily: Fonts.brandBlack,
    fontSize: 30,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  allRestaurantsTitle: {
    fontFamily: Fonts.brandBold,
    fontSize: 20,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
});
