import React from 'react'
import { StyleSheet, View, StatusBar, Text, ScrollView, Image, ImageBackground, Button} from 'react-native';
import AppBtn from '../components/AppBtn';

const bgImage = require('../assets/LivingRoom.jpg')

function WelcomeScreen(props) {
  return (
    
    <ImageBackground blurRadius={3} style={mystyles.background} source={bgImage}>
        <Image source={require('../assets/UnStuffLogo.png')} style={mystyles.logo}/>
        <Text style={mystyles.tagLine}>Unstuff Your Life</Text>

        {/* <View style={mystyles.loginButton}>
            <Button title='Login' color='white' style={mystyles.btntextColor}/>
        </View> */}

        {/* <View style={mystyles.regButton}>
            <Button title='Register' color='white' />
        </View> */}

        <AppBtn title={'Login'} onPress={() => console.log('Login')}/>
        <AppBtn title={'Register'} color='secondary' onPress={() => console.log('Register')}/>
        
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
        height: 50,
        backgroundColor:'blue',
        borderRadius: 50,
        justifyContent: 'center'
    },
    regButton:{
        width: "100%",
        height: 50,
        backgroundColor:'hotpink',
        borderRadius: 50,
        marginBottom:30,
        justifyContent: 'center'
        
    },
    btntextColor:{
        color:'white',
        fontWeight:900,

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
