import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

function Card(props) {
    return (
        <>
            <View style={styles.card}>
                <Image source={require('../assets/jacket1.jpg')} style={styles.img}/>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    card:{
        
    },
    img:{
        height:50,
        width: 50
    }
})

export default Card;