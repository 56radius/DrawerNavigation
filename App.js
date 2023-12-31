import "react-native-gesture-handler";
import * as React from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

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

{
  /* Profile Screen */
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
        <Drawer.Screen
          options={{
            drawerIcon: () => <AntDesign name="home" size={24} color="black" />,
          }}
          name="Home"
          component={HomeScreen}
        />

        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <AntDesign name="profile" size={24} color="black" />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
