import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { firestore } from "./firebase";
import TimePicker from "./screens/TimePicker";
import Listar from "./screens/Listar";
import Notifications from "./screens/Notifications";
import Garrafa from "./screens/Agua";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Garrafa"
        drawerContent={CustomDrawerContent}
      >
        <Drawer.Screen name="Registrar Hora" component={TimePickerScreen} />
        <Drawer.Screen name="Listar" component={ListarScreen} />
        <Drawer.Screen name="Notificações" component={NotificationsScreen} />
        <Drawer.Screen name="Garrafa" component={GarrafaScreen} />
        {/* <Drawer.Screen
        name="Lista Com Filtro Restaurantes"
        component={ListaComFiltroRestaurantesScreen}
      />
      <Drawer.Screen name="Lista Com Filtro" component={ListaComFiltroScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

function TimePickerScreen({ navigation }) {
  return <TimePicker></TimePicker>;
}

function ListarScreen({ navigation }) {
  return <Listar></Listar>;
}

function NotificationsScreen({ navigation }) {
  return <Notifications></Notifications>;
}

function GarrafaScreen({ navigation }) {
  return <Garrafa></Garrafa>;
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
