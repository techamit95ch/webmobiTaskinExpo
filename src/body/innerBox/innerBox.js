import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Form from "../../FormBody/FormBody"
const innerBox = () => {
  return (
    <View style={styles.box}>
      <Form/>
    </View>
  );
};

export default innerBox;

const styles = StyleSheet.create({
  box: {
    boxShadow: "inset 0 10 14px 10px grey",
    height: 604,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '-moz-box-shadow':    'inset 0 0 10px grey',
    '-webkit-box-shadow': 'inset 0 0 10px grey'

  },
});
