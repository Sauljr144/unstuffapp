import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import AppText from '../components/AppText'
import color from '../config/color'
import ListItem from '../components/ListItem'

const ListingDetailScreen = (props) => {
  return (
    <View>
        <Image style={styles.image} source={require('../assets/jeanJacket.jpg')}/>
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Great Looking Jean Jacket for Sale</AppText>
            <AppText style={styles.price}>$100</AppText>

            <ListItem  image={require('../assets/phillip.jpg')} title='Philip Martin' subTitle='12 Listings'/>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:500
    },
    detailsContainer:{
        padding:20
    },
    title:{
        fontSize:21,
        fontWeight:'500'
    },
    price:{
        color: color.secondary,
        fontSize:21,
        marginVertical:10,
    }
})

export default ListingDetailScreen