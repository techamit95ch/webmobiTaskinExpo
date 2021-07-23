import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
const NavRight = () => {
  return (
    <View style={styles.nav}>
      <ListItem style={{ margin: 0, padding: 0 }}>
        <TouchableOpacity style={styles.links}>
          <MaterialCommunityIcons
            name="microsoft-teams"
            style={styles.icon}
            size={24}
          />
        </TouchableOpacity>
      </ListItem>
      <ListItem style={{ margin: 0, padding: 0 }}>
        <TouchableOpacity style={styles.links}>
          <MaterialCommunityIcons
            name="microsoft-teams"
            style={styles.icon}
            size={24}
          />
        </TouchableOpacity>
      </ListItem>
      <ListItem style={{ margin: 0, padding: 0 }}>
        <TouchableOpacity style={styles.links}>
          <MaterialCommunityIcons
            name="microsoft-teams"
            style={styles.icon}
            size={24}
          />
        </TouchableOpacity>
      </ListItem>
      <ListItem style={{ margin: 0, padding: 0 }}>
        <TouchableOpacity style={styles.links}>
          <MaterialCommunityIcons
            name="microsoft-teams"
            style={styles.icon}
            size={24}
          />
        </TouchableOpacity>
      </ListItem>


      
    </View>
  );
};

export default NavRight;

const styles = StyleSheet.create({
  nav: {
    //   backgroundColor: '#fff',
    flex: "1.5",
    textAlign: "center",
    width: "10%",
    backgroundColor: "white",
    height: 663,
    // padding: 5,
  },
  links: {
    height: 20,
    width: 30,
    padding: 2,
    borderRadius: 5,
    
    justifyContent: "center",
    textAlign: "center",
    pointer: "cursor",
  },
  icon:{
    color:'#6530a2',
  },
});
