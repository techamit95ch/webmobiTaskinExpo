import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { Card, ListItem, Button, Icon, Divider, } from "react-native-elements";

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

      <TouchableOpacity style={styles.nav2}>
        <Text style={{ color: "#bebbc5"}}>Genral</Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity style={styles.nav2}>
        <Text style={{ color: "#bebbc5" }}>Privacy</Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity style={styles.nav}>
        <Text style={{ color: "#6530a2", fontWeight: "bold" }}>Fatures</Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity style={styles.nav2}>
        <Text style={{ color: "#bebbc5"}}>Cutomization</Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity style={styles.nav2}>
        <Text style={{ color: "#bebbc5"}}>Integration</Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity style={styles.nav2}>
        <Text style={{ color: "#bebbc5"}}>Session Setting</Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity style={styles.nav2}>
        <Text style={{ color: "#bebbc5"}}>My Plans </Text>
      </TouchableOpacity>
      <Divider />
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
    height: 40,
    padding: 8,
    paddingLeft: 30,
    textAlign: "left",
    borderLeftColor: "#6530a2",
    borderLeftWidth: 4,
    borderLeftStyle: "solid",
    color: "#6530a2",
  },
  nav2: {
    backgroundColor: "inherit",
    width: "100%",
    height: 40,
    padding: 8,
    paddingLeft: 30,
    textAlign: "left",
    // borderLeftColor: "#6530a2",
    // borderLeftWidth: 4,
    // borderLeftStyle: "solid",
    // color: "#6530a2",
  },
});
