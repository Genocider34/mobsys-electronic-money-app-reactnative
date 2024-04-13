import { Platform, StatusBar, StyleSheet } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import COLOR from "./constants/COLOR";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: COLOR.spiralDark },
            drawerContentStyle: { backgroundColor: COLOR.spiralDark },
            drawerActiveTintColor: "white",
            drawerInactiveTintColor: "white",
            headerTintColor: "white",
          }}
        />
        <Drawer.Screen
          name="Log out"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

{
  /* <LoginScreen /> */
}
{
  /* <HomeScreen /> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
