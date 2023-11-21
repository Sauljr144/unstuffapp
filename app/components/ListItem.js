import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import AppText from './AppText'
import color from '../config/color'

const ListItem = ({title, subTitle, image}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={image}/>
        <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10
    },
    title:{
        fontWeight:'500',
        fontSize:21
    },
    subTitle:{
        color:color.medium,
        fontSize:15
    }
})

export default ListItem