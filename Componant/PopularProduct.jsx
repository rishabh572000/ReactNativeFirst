import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, Button, Alert, TouchableOpacity, TextInput, ScrollView, Platform, } from 'react-native';
// import { Icon } from '@rneui/themed';
import Icon from "react-native-vector-icons/AntDesign";

export default function PopularProduct(props) {
    var myIcon=props.data.favourat? 'hearto':'heart';
return (
  <>
    <View style={styles.container}>
    <View style={styles.one}>
      <View style={styles.imageSection} backgroundColor={props.data.color}>
        <Image source={props.data.image} style={styles.image} />
      </View>
      <View style={styles.details}>
         <Text style={styles.name}>{props.data.name}</Text>
         <Text style={styles.para}>{props.data.para}</Text>
         <Text style={styles.name}>${props.data.price}</Text>
      </View>
      </View>
      <View style={styles.fav}>
        <Text>
          <Icon
            name={Platform.OS === "ios" ? myIcon : myIcon}
            color="#2E2E2E"
            size={25}
          />
        </Text>
      </View>
    </View>
  </>
)
}
const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flexDirection:'row',
        height:150,
        justifyContent:'space-between',
        marginBottom:10,
    },
    imageSection:{
        width:150,
        height:150,
        backgroundColor:`rgba(250, 173, 121, 1)`,
        padding:10,
        borderRadius:30,
    },
    image:{
        width:'100%',
        height:'100%',
    },
    one:{
        flexDirection:'row',
    },
    details:{
        justifyContent:'center',
        paddingLeft:10,
    },
    name:{
        fontSize:18,
        color:'rgba(40, 48, 50, 1)'
    },
    para:{
        color:'rgba(125, 133, 135, 1)'
    },
  });