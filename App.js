import "react-native-gesture-handler";
import * as React from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";

{
  /* Home screen in the thing */
}
function HomeScreen() {
  return (
    <View>
      <Text> Home </Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Text> Profile </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
