import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, Button, Alert, TouchableOpacity } from 'react-native';

export default function Splash() {
  const AppButton = ({ title }) => (
    <TouchableOpacity style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
return (
   <>
    <View style={styles.container}>
    <View style={styles.imagecontainer}>
     <View style={styles.imgContOne}></View>
    <Image source={require('../assets/flower.png')} style={styles.image} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.LingtH}>SKINCARE</Text>
      <Text style={styles.DarkH}>GREEN TEE</Text>
      <Text style={styles.para}>Temporary policy: ChatGPT is banned I standing down as a moderator Proposing a Community-Specific Closure Reason for non-English content</Text>
      <View style={styles.formula}><AppButton title='a lightweight formula' /></View>
      <View style={styles.joinButton}>
         <AppButton title='Login' />
         <AppButton title='Signup' />
      </View>
      
    </View>
    </View>
   </>
)
}

const styles = StyleSheet.create({
    
    textContainer:{
      marginVertical:10,
      marginHorizontal:10,
      height:Dimensions.get('window').height*55/100,
    },
    LingtH:{
      fontSize:25,
    },
    DarkH:{
      fontSize:35,
      color:'#7CA753'
    },
    para:{
      fontSize:15,
      color:'#727272',
      lineHeight:17
    },
    button:{
      color:'#83CB68',
    },  
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#83CB68",
      borderRadius: 50,
      paddingVertical: 10,
      paddingHorizontal: 30,
      marginVertical:10,
      
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
    },
    formula:{
      width:250,
      marginVertical:10,
    },
    joinButton:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginVertical:80,
    },
    image: {
      width: 200,
      height: 200,
      alignSelf: 'center',
      marginVertical:50,
      // backgroundColor:'green',
      borderRadius:150,
      borderColor:'#5BAF2A',
      borderWidth:2,
      
    },
    imagecontainer:{
      height:Dimensions.get('window').height*40/100,
      width:Dimensions.get('window').width,
    },
    container: {
      position:'relative',
   },
   imgContOne:{
    // backgroundColor:'red',
    width:200,
    height:200,
    position:'absolute',
    borderRadius:50,
    top:-15,
    // filter: 'blur(100px)',
   }
  });