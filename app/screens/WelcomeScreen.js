import React from 'react'
import { StyleSheet, View, StatusBar, Text, ScrollView, Image, ImageBackground} from 'react-native';

const bgImage = require('../assets/LivingRoom.jpg')

function WelcomeScreen() {
  return (
    
    <ImageBackground style={mystyles.background} source={bgImage}>
        <Image source={require('../assets/UnStuffLogo.png')} style={mystyles.logo}/>
        <Text style={mystyles.tagLine}>Unstuff Your Life</Text>
        <View style={mystyles.loginButton}/>
        <View style={mystyles.regButton}/>
    </ImageBackground>
   
  )
}

const mystyles = StyleSheet.create({

    background:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    loginButton:{
        width: "100%",
        height: 70,
        backgroundColor:'blue',
    },
    regButton:{
        width: "100%",
        height: 70,
        backgroundColor:'hotpink',
    },
    logo:{
        width:200,
        height:200,
        position:'absolute',
        top: 80
    }
    ,
    tagLine:{
        bottom: 400
    }
  });

  export default WelcomeScreen; 
