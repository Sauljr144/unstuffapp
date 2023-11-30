import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import color from "../config/color";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: color.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: color.secondary,
    },
  },
];

const AccountsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Jose Martinez"
          subTitle="josemartines@email.com"
          image={require("../assets/phillip.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
            
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem title='Log Out' ImageComponent={<Icon name={'logout'} backgroundColor="orange"/>}/>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: color.light,
    
  },
  container: {
    
    marginVertical: 20,

  },
});
export default AccountsScreen;
