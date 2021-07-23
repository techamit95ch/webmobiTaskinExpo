import { StyleSheet,TouchableOpacity } from "react-native";
import styled from 'styled-components'

export default StyleSheet.create({
  nav: {
    //   backgroundColor: '#fff',
    flex: "1.5",
    textAlign: "center",
    width: "10%",    
    backgroundColor: "white",
    height: 663,
    // padding: 5,
  },
  image: {
    height: 50,
    width: 80,
    // marginTop: 5,
    margin:5,
    borderRadius: 15,
  },
  menu:{
    height: 40,
    width: 40,
    cursor: 'pointer',
    
  },
  links:{    
    height: 55,
    width: 60,
    padding:2,
    borderRadius: 5,
    border: '1px solid #6530a2',
    justifyContent: 'center',
    textAlign: "center",
    pointer: 'cursor'
  },
  text:{
    color:'#6530a2',
    border:'none',
    fontSize:13,
    // fontWeight:'bold'
  },
  icon:{
    color:'#6530a2',
  },
});
