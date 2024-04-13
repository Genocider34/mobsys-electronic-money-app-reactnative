import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import COLOR from "../constants/COLOR";
import WhiteText from "../components/WhiteText";
import WhiteTextBold from "../components/WhiteTextBold";
import CustomInput from "../components/CustomInput";
import PrimaryButton from "../components/PrimaryButton";
import HighlightText from "../components/HighlightText";
import Icon from "../components/Icon";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/cashLogo.png")}
        />
        <WhiteTextBold style={styles.title}>PocketCash</WhiteTextBold>
      </View>
      <View style={styles.signInContainer}>
        <HighlightText style={styles.signText}>Sign in</HighlightText>
        <WhiteText>Easy and Safe way to manage your money</WhiteText>
      </View>
      <View style={styles.inputContainer}>
        <CustomInput style={styles.input} placeholder="Enter username" />
        <CustomInput style={styles.input} placeholder="Enter password" />
        <WhiteText>Forgot password?</WhiteText>
      </View>
      <PrimaryButton style={styles.button}>Sign in</PrimaryButton>

      <WhiteText style={styles.textContinue}>
        ───────── Or continue with ─────────
      </WhiteText>

      <View style={styles.imagesContainer}>
        <Icon source={require("../assets/images/gg.png")} />
        <Icon source={require("../assets/images/fb.png")} />
        <Icon source={require("../assets/images/x2.png")} />
      </View>

      <View style={styles.registerContainer}>
        <WhiteText style={styles.memberText}>Not a member?</WhiteText>
        <HighlightText>Register now</HighlightText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLOR.spiralDark,
    width: "100%",
    paddingVertical: 26,
  },
  image: {
    width: 50,
    height: 50,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  signText: {
    fontSize: 24,
  },
  title: {
    fontSize: 40,
    marginLeft: 12,
  },
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  input: {
    marginVertical: 10,
  },
  signInContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  button: {
    width: 350,
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  memberText: {
    marginRight: 6,
  },
  imagesContainer: {
    flexDirection: "row",
    marginBottom: 36,
  },
  textContinue: {
    marginTop: 36,
    marginBottom: 15,
  },
});
