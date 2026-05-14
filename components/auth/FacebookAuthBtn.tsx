import { Colors } from "@/constants/theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const FacebookAuthBtn = () => {
  return (
    <TouchableOpacity style={styles.facebookBtn}>
      <FontAwesome5 name="facebook" size={18} color={"#000"} />
      <Text style={styles.facebookBtnText}>Continue with facebook</Text>
    </TouchableOpacity>
  );
};

export default FacebookAuthBtn;

const styles = StyleSheet.create({
  facebookBtn: {
    backgroundColor: Colors.light,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  facebookBtnText: {
    color: Colors.dark,
    fontSize: 18,
    fontWeight: "600",
  },
});
