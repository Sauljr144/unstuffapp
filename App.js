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
import AppPicker from "./app/components/AppPicker";
import AppPicker2 from "./app/components/AppPicker2";

export default function App() {

  const [firstName, setFirstName] = useState('This is our orginal text.');
  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
  ]

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
      {/* <AppSwitch/> */}
      <Screen>

      <AppPicker2 items={categories} icon={"apps"} placeholder={'Category'}/>
      <AppTextInput icon={"email"} placeholder={'Email'}/>
      </Screen>
    </GestureHandlerRootView>
  );
}
