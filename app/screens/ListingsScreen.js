import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import color from "../config/color";


const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jeanJacket.jpg"),
  },
  {
    id: 2,
    title: "Awesome Jacket",
    price: 1000,
    image: require("../assets/jacket1.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: color.light,
        
    },
})

export default ListingsScreen;
