import { View, Image, StyleSheet } from "react-native";
import COLOR from "../constants/COLOR";

export default function Icon({ source }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={source} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
    marginHorizontal: 24,
    padding: 6,
  },
  image: {
    width: 50,
    height: 50,
  },
});
