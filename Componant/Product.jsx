import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, Button, Alert, TouchableOpacity, TextInput } from 'react-native';

export default function Product(props) {
  // const myImage=require(props.image)
    const AppButton = () => (
        <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>+</Text>
        </TouchableOpacity>
      );
  return (
    <>
     <View style={styles.container}>
      <View style={styles.imageContainer}>
       <Image source={props.data.image} style={styles.image} key={props.id}/>
      </View>
        <View style={styles.bodycontainer}>
          <View style={styles.bodyText}>
           <Text style={styles.heading}>{props.data.name}</Text>
           <Text style={styles.para}>{props.data.para}</Text>
           <View style={styles.bottomButton}>
             <Text style={styles.price}>${props.data.price}</Text>
             <AppButton />
           </View>
          </View>
       </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
    container:{
      marginHorizontal:10,
      width:200,
      height:380,
    //   backgroundColor:'#fff',
      position:'relative',
    },
    bodycontainer:{
        width:200,
        height:330,
        backgroundColor:'#fff',
        position:'absolute',
        bottom:0,
        borderRadius:50,
    },
    bodyText:{
        width:190,
        height:380-250,
        backgroundColor:'linear-gradient(103.48deg, rgba(58, 146, 16, 0.27) 0%, rgba(128, 227, 81, 0.27) 97.66%)',
        position:'absolute',
        bottom:0,
        margin:5,
        borderRadius:50,
        padding:25,
    },
    heading:{
        fontSize:20,
        // fontWeight:800,
    },
    bottomButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:15,
    },
    appButtonContainer:{
        backgroundColor:'rgba(96, 124, 125, 1)',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:4,
        paddingBottom:4,
        borderRadius:50,
        lineHeight:0,
        
    },
    appButtonText:{
      color:'#fff',
    },
    imageContainer:{
        width:200,
        height:250,
        zIndex:2,
        borderRadius:50,
        // backgroundColor:'red',
    },
    image:{
        width: 200,
        height: '90%',
        alignSelf: 'center',
    }

})
