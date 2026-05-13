import AppleAuthBtn from "@/components/auth/AppleAuthBtn";
import GoogleAuthBtn from "@/components/auth/GoogleAuthBtn";
import SmoothInfiniteScroll from "@/components/auth/SmoothInfiniteScroll";
import { Fonts } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
export default function Index() {
  const openWebBrowswer = () => {
    Linking.openURL("https://galaxies.dev");
  };
  return (
    <View style={styles.container}>
      <View style={styles.infiniteScrollContainer}>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set1" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="up" iconSet="set2" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set3" />
        </View>
        {/* add lienar graduebt */}
        <LinearGradient
          colors={["transparent", "#fff"]}
          style={{
            position: "absolute",
            height: 200,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require("@/assets/images/wolt-logo.png")}
          style={styles.brandLogo}
        />
        <Animated.Text style={styles.tagLine} entering={FadeInDown}>
          Almost everyting delivered
        </Animated.Text>
        <View style={styles.btnsContainer}>
          <Animated.View entering={FadeInDown.delay(100)}>
            <AppleAuthBtn />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <GoogleAuthBtn />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(300)}>
            <TouchableOpacity style={styles.otherOptions}>
              <Text style={styles.otherBtnText}>Other options</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <Animated.View
          style={styles.privacyContainer}
          entering={FadeInDown.delay(400)}
        >
          <Text style={styles.privacyText}>
            Please visit{" "}
            <Text style={styles.privacyLink} onPress={openWebBrowswer}>
              Wolt Privacy Statment
            </Text>{" "}
            to learn about personal data processing at Wolt.
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infiniteScrollContainer: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    position: "relative",
    overflow: "hidden",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  tagLine: {
    fontSize: 30,
    fontFamily: Fonts.brandBlack,
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 36,
  },
  brandLogo: {
    width: "100%",
    height: 48,
    resizeMode: "contain",
    marginBottom: 20,
  },
  btnsContainer: {
    gap: 12,
    width: "100%",
  },
  otherOptions: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  otherBtnText: {
    color: "#666",
    fontSize: 18,
    fontWeight: "600",
  },
  privacyContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  privacyText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    lineHeight: 18,
  },
  privacyLink: {
    color: "#4285f4",
    textDecorationLine: "underline",
  },
});
