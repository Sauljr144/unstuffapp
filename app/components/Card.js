import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import color from '../config/color'
import AppText from './AppText';

function Card({title, subTitle, image}) {
    return (
        <>
            <View style={styles.card}>
                <Image style={styles.img} source={image}/>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    card:{ 
        borderRadius:15,
        backgroundColor: 'white',
        marginBottom:20,
        overflow:'hidden'
    },
    img:{
        width:'100%',
        height:400,
        
    },
    detailsContainer:{
        padding:20
    },
    title:{
        marginBottom:7,
        fontSize: 24
    },
    subTitle:{
        color: color.secondary,
        fontWeight: 900
    }
})

export default Card;