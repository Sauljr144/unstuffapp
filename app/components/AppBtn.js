import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/color';

function AppBtn({title, color='primary', onPress, style}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color] }, style]} onPress={onPress}> 
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        width:'100%',
        marginVertical:10,
        

    },
    text:{
        color:'white',
        fontSize:20,
        textTransform: 'uppercase',
        fontWeight:'bold'
        
    }
})

export default AppBtn;