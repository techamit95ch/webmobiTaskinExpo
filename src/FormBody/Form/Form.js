import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

const Form = () => {
  return (
    <View style={styles.form}>
      <Text>sf</Text>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flex: 4,
    height: 500,
    borderRadius: 10,
    "box-shadow": " 0px 0px 10px 0px rgba(0,0,0,0.57)",
    "-webkit-box-shadow": " 0px 0px 10px 0px rgba(0,0,0,0.57)",
    "-moz-box-shadow": "0px 0px 10px 0px rgba(0,0,0,0.57)",
  },
});
