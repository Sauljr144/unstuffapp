import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import color from '../config/color'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const ListItemDeleteAction = ({onPress}) => {
  return (

   <>
   <TouchableWithoutFeedback onPress={onPress}>

        <View style={styles.container}>
            <MaterialCommunityIcons name='trash-can' size={40} color={color.light}/>
        </View>
        
   </TouchableWithoutFeedback>
   </>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:color.danger,
        width:70,
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default ListItemDeleteAction