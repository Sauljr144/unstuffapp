import React, {useState} from 'react'
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppBtn from '../components/AppBtn'
import { StyleSheet, Image } from 'react-native'

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

  return (
   <Screen style={styles.container}>
    <Image source={require('../assets/UnStuffLogo.png')} style={styles.logo}/>
    <AppTextInput
    autoCapitalize='none'
    autoCorrect={false}
    icon='email'
    placeholder='Email'
    keyboardType='email-address'
    onChangeText={text => setEmail(text)}
    textContentType='emailAddress'
    />
    <AppTextInput
    autoCapitalize='none'
    autoCorrect={false}
    icon='lock'
    placeholder='Password'
    keyboardType='default'
    onChangeText={text => setPassword(text)}
    textContentType='password'
    secureTextEntry
    />
    <AppBtn title='Login' style={styles.btn} onPress={() => console.log(email, password)}/>


   </Screen>
  )
}

const styles = StyleSheet.create({
    logo:{
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    btn:{
        alignSelf: 'center',
        marginVertical:300,
        width:'80%'
    },
    container:{
        padding:15
    }
    
})

export default Login