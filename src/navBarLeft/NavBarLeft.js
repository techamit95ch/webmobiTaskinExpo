import React from "react";
import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { ListItem, Avatar } from "react-native-elements";
import { Divider } from "react-native-elements";

import styles, { Link } from "./styles";
// import './navbar.css'
const NavBarLeft = () => {
  function MouseOver(event) {
    event.target.style.border = "1px solid #6530a2";
  }
  function MouseOut(event) {
    event.target.style.border = "none";
  }
  /* 
  <ListItem key={i} bottomDivider>
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
  */
  return (
    <View style={styles.nav}>
      {/* <ListItem style={styles.menu}>
        <ListItem.Content style={{ margin: 0,padding:0 }}> */}
      <Avatar
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrGN59kh-K6ws1u_5Es5v_dPUkOhRKL5ZcDA&usqp=CAU",
        }}
        style={styles.image}
      />
      {/* </ListItem.Content>
      </ListItem> */}

      <ListItem style={{ margin: 0, padding: 0 }}>
        <ListItem.Content style={{ margin: 0, padding: 0 }}>
          <TouchableOpacity style={styles.links}>
            <AntDesign name="barschart" style={styles.icon} size={20} />
            <ListItem.Title style={styles.text}>Event</ListItem.Title>
          </TouchableOpacity>
        </ListItem.Content>
      </ListItem>

      <ListItem style={{ margin: 0, padding: 0 }}>
        <ListItem.Content style={{ margin: 0, padding: 0 }}>
          <TouchableOpacity style={styles.links}>
            <MaterialCommunityIcons
              name="microsoft-teams"
              style={styles.icon}
              size={20}
            />
            <ListItem.Title style={styles.text}>Teams</ListItem.Title>
          </TouchableOpacity>
        </ListItem.Content>
      </ListItem>

      <ListItem style={{ margin: 0, padding: 0 }}>
        <ListItem.Content style={{ margin: 0, padding: 0 }}>
          <TouchableOpacity style={styles.links}>
            <Ionicons name="analytics-outline" style={styles.icon} size={20} />
            <ListItem.Title style={styles.text}>Analytics</ListItem.Title>
          </TouchableOpacity>
        </ListItem.Content>
      </ListItem>

      <ListItem style={{ margin: 0, padding: 0 }}>
        <ListItem.Content style={{ margin: 0, padding: 0 }}>
          <TouchableOpacity style={styles.links}>
            <MaterialIcons name="drafts" style={styles.icon} size={20} />
            <ListItem.Title style={styles.text}>Drafts</ListItem.Title>
          </TouchableOpacity>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default NavBarLeft;
