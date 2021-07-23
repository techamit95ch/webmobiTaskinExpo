import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

import FormNav from "./FormNav/FormNav";
import Form from "./Form/Form";
const FormBody = () => {
  return (
    <View style={styles.formBody}>
      <FormNav />
      <Form />
    </View>
  );
};

export default FormBody;

const styles = StyleSheet.create({
  formBody: {
    display: "flex",
    borderRadius: 10,
    height: 500,
    width: 1000,
    backgroundColor: "white",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});
