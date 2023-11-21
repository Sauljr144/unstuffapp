import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../config/color'
import { AntDesign, Ionicons } from '@expo/vector-icons'; 



function ViewImageScreen() {
  return (

    <View style={styles.container}>
        <View style={styles.closeIcon}>
        <AntDesign name="closesquareo" size={28} color="white" />
        </View>
        <View style={styles.deleteIcon}>
        <Ionicons name="trash-outline" size={30} color="white" />
        </View>
        <Image resizeMode='contain' style={styles.image} source={require("../assets/oldChair.jpg")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%'
    },
    container:{
        backgroundColor: color.black,
        flex: 1
    },
    closeIcon:{
        width:50,
        height:50,
        position: 'absolute',
        top: 60,
        left: 30,
        justifyContent:'center',
        alignItems:'center'
    },
    deleteIcon:{
        width:50,
        height:50,
        position: 'absolute',
        top: 60,
        right: 30,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default ViewImageScreen;