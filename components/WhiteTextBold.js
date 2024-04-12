import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function WhiteTextBold({ children, style }) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontFamily: "Poppins-Bold",
  },
});
