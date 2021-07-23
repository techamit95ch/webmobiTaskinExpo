import React from "react";
import { Text, View, TouchableOpacity  } from "react-native";
import styles from "./styles";
import { Foundation,Ionicons,MaterialIcons  } from "@expo/vector-icons";
// import { Ionicons } from '@expo/vector-icons';
const topBar = () => {
  return (
    <View style={styles.top}>
      <View style={styles.left}>
        <Foundation name="list" size={30} color="black" />
        <Text style={{ fontSize: 30, marginLeft: 5, fontWeight: "bold" }}>
          Admin Dashboard
        </Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity  style={styles.button}>
          <Text style={{fontSize:16,display:'inline-block' ,marginHorizontal: 5 , marginBottom: 15}}>
            Preview on :           
          </Text>
          <TouchableOpacity  style={{ display:'inline-block' ,marginHorizontal: 5 , marginTop: 5 }}>
          <Ionicons  name="ios-phone-landscape-outline" size={24} color="black" />
          <MaterialIcons  name="phone-iphone" size={24} color="black" />
       
          </TouchableOpacity>
           </TouchableOpacity>
      </View>
    </View>
  );
};

export default topBar;
