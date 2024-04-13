import { View, Text, StyleSheet, Image } from "react-native";
import WhiteText from "../components/WhiteText";
import COLOR from "../constants/COLOR";
import WhiteTextBold from "../components/WhiteTextBold";
import PrimaryButton from "../components/PrimaryButton";
import { FlatList } from "react-native-gesture-handler";
import DATA from "../constants/DATA";
import ItemList from "../components/ItemList";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <WhiteText style={styles.balanceText}>Your Balance</WhiteText>
        <WhiteTextBold style={styles.balanceAmountText}>$5,000</WhiteTextBold>
      </View>
      <View>
        <PrimaryButton>Request</PrimaryButton>
        <PrimaryButton>Send Money</PrimaryButton>
      </View>
      <WhiteText style={styles.transText}>Transaction</WhiteText>
      <FlatList
        data={DATA}
        renderItem={(itemData) => {
          return (
            <ItemList
              img={itemData.item.img}
              title={itemData.item.title}
              date={itemData.item.date}
              amount={itemData.item.amount}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.spiralDark,
    width: "100%",
    paddingVertical: 26,
    paddingHorizontal: 12,
  },
  balanceContainer: {
    backgroundColor: COLOR.spiralGreen,
    padding: 20,
    margin: 12,
    borderRadius: 10,
  },
  balanceText: {
    fontSize: 24,
    color: "black",
  },
  balanceAmountText: {
    fontSize: 40,
    color: "black",
  },
  transText: {
    fontSize: 24,
    color: "white",
  },
});
