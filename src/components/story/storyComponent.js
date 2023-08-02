import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function StoryComponent({username, image}){
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}></Image>
            <Text style={styles.text}>{username}</Text>
        </View>
    )    

}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 7.5,
        marginRight: 7.5        
    },
    image:{
        height: 62,
        width: 62,
        borderRadius: 50,
        borderColor: '#E13E46',
        borderWidth: 2,
    },
    text:{
        fontSize: 12,
        flexDirection: 'row',
        alignItems: 'center',
    }

})