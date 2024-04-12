import { TextInput, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function CustomInput({ placeholder, style }) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });
  return <TextInput style={[styles.input, style]} placeholder={placeholder} />;
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
    borderWidth: 1,
    backgroundColor: "white",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    fontFamily: "Poppins-Regular",
  },
});
