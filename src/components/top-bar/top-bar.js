import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function TopBar(){

    return(
    <View style={styles.container}>
        <Image style={styles.text} source={require('../../assets/logo.png')}></Image>
        <View style={styles.icons}>
            <Image style={styles.iconHeart} source={require('../../assets/heart.png')}></Image>
            <Image style={styles.iconSend} source={require('../../assets/message.png')}></Image>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 10,
        paddingRight: 10,
        paddingLeft: 10,
        marginTop: 90,
        height: '5%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icons:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconCamera:{
        width: 24,
        height: 26,
    },
    iconHeart:{
        width: 20,
        height: 20,
        marginLeft: 20,
    },
    iconSend:{
        width: 20,
        height: 20,
        marginLeft: 16
    },
    text:{
        width: 105,
        height: 30,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

})