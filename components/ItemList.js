import { View, Text, StyleSheet, Image } from "react-native";
import WhiteText from "./WhiteText";
import WhiteTextBold from "./WhiteTextBold";
import COLOR from "../constants/COLOR";
import { withDecay } from "react-native-reanimated";
export default function ItemList({ img, title, date, amount }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={img} />
      <View style={styles.titleContainer}>
        <WhiteTextBold>{title}</WhiteTextBold>
        <WhiteText>{date}</WhiteText>
        <View style={styles.amountContainer}>
          <WhiteTextBold>${amount}</WhiteTextBold>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 6,
    borderWidth: 1,
    borderColor: COLOR.greenGrey,
    borderRadius: 10,
    padding: 6,
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
  },
  amountContainer: {},
  titleContainer: {
    justifyContent: "space-between",
    flexDirection: "column",
  },
});
