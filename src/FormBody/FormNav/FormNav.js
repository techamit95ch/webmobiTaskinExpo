import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, ListItem, Button, Icon, Divider } from "react-native-elements";

const FormNav = () => {
  return (
    <View style={styles.formNav}>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={{ color: "#bebbc5" }}>
            Event Settings
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <Divider />

      <ListItem style={styles.nav}>
        <ListItem.Content >
          <ListItem.Title style={{ color: "#aaa7b5" }}>Genral</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default FormNav;

const styles = StyleSheet.create({
  formNav: {
    display: "flex",
    flex: 1,
    height: 500,
    borderRadius: 10,
    color: "grey",
    "box-shadow": " -5px 0px 10px 0px rgba(0,0,0,0.30)",
    "-webkit-box-shadow": " -7px 0px 10px 0px rgba(0,0,0,0.47)",
    "-moz-box-shadow": "-5px 0px 10px 0px rgba(0,0,0,0.40)",
  },
  nav: {
    backgroundColor: "#f4f6fa",
    width: "100%",
    margin: 0,
  },
});
