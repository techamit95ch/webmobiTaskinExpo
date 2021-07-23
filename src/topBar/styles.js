import { StyleSheet} from 'react-native';
export default StyleSheet.create({
    top: {
        display: 'flex',
        textAlign: "center",
        width: "100%",        
        backgroundColor: "white",
        height: 60,
        justifyContent: "space-between",
        border: '1px solid #ddd'
      },     
      left:{
        display: 'inline-block',
        flex: 2,
        alignItems: "flex-start",
        textAlign: "left",
        marginHorizontal: 5,
        padding: 5,
        fontSize:30,
        fontWeight:'bold'
      },
      right:{
        flex: 3,
        alignItems: "flex-end",
        marginHorizontal: 5,
        // display: 'inline-block',
      },
      button:{
            display: 'inline-block',
          border: '1px solid grey',
          height: 40,
          width: 200,
          marginHorizontal: 10,
          marginTop: -20,
          marginBottom:15,
          borderRadius:5,
          alignItems:'center',
          justifyContent:'space-around',
          alignItems:'center',
          flexDirection: "row",
         flexWrap: "wrap",

        //   padding: 6,
      }

})

