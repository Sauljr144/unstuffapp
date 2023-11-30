import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import AppText from './AppText'
import color from '../config/color'
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItem = ({title, subTitle, image, onPress, renderRightActions, ImageComponent }) => {
  return (

    <Swipeable renderRightActions={renderRightActions}>

        <TouchableHighlight onPress={onPress} underlayColor={color.light}>

            <View style={styles.container}>
                {ImageComponent}
               {image && <Image style={styles.image} source={image}/>} 
                <View style={styles.detailContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>

        </TouchableHighlight>
    </Swipeable>


  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        padding:20,
        backgroundColor:'white',
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
    },
    detailContainer:{
        marginLeft:10,
    }
})

export default ListItem