import {
  Platform,
  StatusBar,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
