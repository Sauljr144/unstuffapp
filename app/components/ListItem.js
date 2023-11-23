import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import AppText from './AppText'
import color from '../config/color'
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItem = ({title, subTitle, image, onPress, renderRightActions }) => {
  return (

    <Swipeable renderRightActions={renderRightActions}>

        <TouchableHighlight onPress={onPress} underlayColor={color.light}>

            <View style={styles.container}>
                <Image style={styles.image} source={image}/>
                <View>
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
        padding:20,
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