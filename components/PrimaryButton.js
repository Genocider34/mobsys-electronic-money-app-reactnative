import { View, Text, Pressable, StyleSheet } from "react-native";
import COLOR from "../constants/COLOR";
import { useFonts } from "expo-font";

export default function PrimaryButton({ children, style }) {
  function pressHandler() {
    console.log("tap!");
  }

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed, style]
            : [styles.buttonInnerContainer, style]
        }
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 10,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: COLOR.spiralGreen,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: COLOR.spiralDark,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
  },
  pressed: {
    opacity: 0.75,
  },
});
