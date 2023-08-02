import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import StoryComponent from "./storyComponent";

export default function Stories(){
    const profile = require('../../assets/profile-pic.jpeg');
    const data = [
        {
            id: Math.random().toFixed(3),
            image: profile,
            username: 'Your Story'
        },
        {
            id: Math.random().toFixed(3),
            image: profile,
            username: 'Your Story'
        },
        {
            id: Math.random().toFixed(3),
            image: profile,
            username: 'Your Story'
        },
        {
            id: Math.random().toFixed(3),
            image: profile,
            username: 'Your Story'
        },
        {
            id: Math.random().toFixed(3),
            image: profile,
            username: 'Your Story'
        },
        {
            id: Math.random().toFixed(3),
            image: profile,
            username: 'Your Story'
        },
        {
            id: Math.random().toFixed(3),
            image: profile,
            username: 'Your Story'
        },
        {
            id: Math.random().toFixed(3),
            image: profile,
            username: 'Your Story'
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