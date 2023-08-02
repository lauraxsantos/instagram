import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import StoryComponent from "./storyComponent";

export default function Stories(){
    const profile = require('../../assets/profile-pic.jpeg');
    const profile2 = require('../../assets/liliProfile.jpeg');
    const profile3 = require('../../assets/mariProfile.jpeg');
    const profile4 = require('../../assets/zaynProfile.jpg');
    const profile5 = require('../../assets/kellProfile.jpeg');
    const profile6 = require('../../assets/selenaProfile.jpg');
    const data = [
        {
            id: Math.random().toFixed(3),
            image: profile,
            username: 'Your Story'
        },
        {
            id: Math.random().toFixed(3),
            image: profile2,
            username: 'willymcarvalho'
        },
        {
            id: Math.random().toFixed(3),
            image: profile3,
            username: 'marilia_090'
        },
        {
            id: Math.random().toFixed(3),
            image: profile4,
            username: 'zayn'
        },
        {
            id: Math.random().toFixed(3),
            image: profile5,
            username: 'kell.s.santos'
        },
        {
            id: Math.random().toFixed(3),
            image: profile6,
            username: 'selenagomez'
        },
    ]

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
              horizontal 
              keyExtractor={(item) => {item.id}} 
              data={data} 
              renderItem={(story)=> <StoryComponent username={story.item.username} image={story.item.image} {...story}/>}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 98,
        borderTopWidth: 0.3,
        borderBottomWidth: 0.3,
        borderColor: '#d3d3d3',
        padding: 2
    },
})