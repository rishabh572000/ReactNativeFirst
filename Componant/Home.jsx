import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, Button, Alert, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import PopularProduct from './PopularProduct';
import Product from './Product';
import ProductData from './ProductData';

export default function Home() {
  return (
    <>
       <View style={styles.container}>
         <Text>Home</Text>
         <ScrollView >
         <TextInput style={styles.search}/>
         <ScrollView horizontal={true}>
         <View style={styles.productData}>
            {ProductData.map((val, ind)=>{
              return val.type=='showcase'?<Product key={val.id} data={val} />:null;
            })}
         </View>
         </ScrollView>
         <Text>Popular</Text>
         {/* <PopularProduct /> */}
         
         <View style={styles.popularData}>
            {ProductData.map((val, ind)=>{
              return val.type=='showcase'?<PopularProduct key={val.id} data={val} />:null;
            })}
         </View>
         </ScrollView>
        
       </View>
    </>
  )
}
const styles = StyleSheet.create({
    container:{
      marginHorizontal:10,
    },
    search: {
        height: 45,
        margin: 12,
        paddingLeft: 20,
        backgroundColor:'#fff',
        borderRadius:50,
    },
    productData:{
      // width:Dimensions.get('window').width,
      alignItems:'center',
      flexDirection:'row',
      overflow: 'scroll',
      height:'auto'
    }
})
