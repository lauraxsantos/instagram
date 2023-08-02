import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TopBar from "../top-bar/top-bar";
import Feed from "../feed/feed";

export default function Main(){

    return(    
        <View style={styles.container}>
            <TopBar></TopBar>
            <Feed></Feed>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',        
        width: "100%",
        height:"100%",
        
    }
})