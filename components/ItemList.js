import { View, Text, StyleSheet, Image } from "react-native";
import WhiteText from "./WhiteText";
import WhiteTextBold from "./WhiteTextBold";
import COLOR from "../constants/COLOR";
import { withDecay } from "react-native-reanimated";
export default function ItemList({ img, title, date, amount }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={img} />
      </View>
      <View style={styles.titleContainer}>
        <WhiteTextBold>{title}</WhiteTextBold>
        <WhiteText>{date}</WhiteText>
      </View>
      <WhiteTextBold>₱{amount}</WhiteTextBold>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.sprialLightDark,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
    borderColor: "white",
    borderRadius: 10,
    padding: 8,
  },
  imageContainer: {
    width: 50,
    height: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
});
