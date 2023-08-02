import React from "react";
import { View, Image, StyleSheet } from "react-native";
export default function TabBar(){
    return(
        <View style={styles.container}>
            <Image style={styles.iconHome}source={require('../../assets/home.png')}/>
            <Image style={styles.iconSearch}source={require('../../assets/search.png')}/>
            <Image style={styles.iconSearch}source={require('../../assets/add-pic.png')}/>
            <Image style={styles.iconHeart}source={require('../../assets/bobinas.png')}/>
            <Image style={styles.profilePic}source={require('../../assets/profile-pic.jpeg')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width:"100%",
        marginBottom: 50, 
        justifyContent: 'space-between',
        paddingBottom: 15,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 15,
        borderTopWidth: 0.3,
        borderColor: '#d3d3d3',
        backgroundColor: 'white'
    },
    iconHome:{
        width: 23,
        height: 24,
    },
    iconSearch:{
        width: 24,
        height: 24
    },
    iconHeart:{
        width: 23,
        height: 23,
    },
    profilePic:{
        width: 23,
        height: 23,
        borderRadius: 50
    }
})