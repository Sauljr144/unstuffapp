import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import "react-native-gesture-handler";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountsScreen from "./app/screens/AccountsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppSwitch from "./app/components/AppSwitch";

export default function App() {

  const [firstName, setFirstName] = useState('This is our orginal text.');

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <Screen> */}
        {/* <Text>{firstName}</Text>
        <TextInput
          secureTextEntry
          clearButtonMode="always"
          maxLength={4}
          keyboardType="default"
          placeholder="First Name"
          style={{ borderBlockColor: "#ccc", borderBottomWidth: 2 }}
          onChangeText={(text) => setFirstName(text)}
        /> */}
        {/* <AppTextInput placeholder="Username" icon={"email"} /> */}

      {/* </Screen> */}
      <AppSwitch/>
    </GestureHandlerRootView>
  );
}
