import { StyleSheet } from "react-native";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function Control() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
