import React from "react";
import { SafeAreaView, FlatList, StyleSheet} from "react-native";
import Post from "./post";
import TabBar from "../tab-bar/tab-bar";
import Stories from "../story/stories";

const postImage = require('../../assets/profile-pic.jpeg');

const data = [
    {
        id: Math.random().toFixed(4),
        username: 'laura.ssantos',
        image: postImage,
        profile: postImage,
        label: 'what a sunny daywhat a sunny daywhat a sunny daywhat a sunny daywhat a sunny daywhat a sunny daywhat a sunny day',
        like: postImage
    },
    {
        id: Math.random().toFixed(4),
        username: 'laura.ssantos',
        image: postImage,
        profile: postImage,
        label: 'what a sunny day',
        like: postImage
    },
    {
        id: Math.random().toFixed(4),
        username: 'laura.ssantos',
        image: postImage,
        profile: postImage,
        label: 'what a sunny day',
        like: postImage
    },
    {
        id: Math.random().toFixed(4),
        username: 'laura.ssantos',
        image: postImage,
        profile: postImage,
        label: 'what a sunny day',
        like: postImage
    },
    {
        id: Math.random().toFixed(4),
        username: 'laura.ssantos',
        image: postImage,
        profile: postImage,
        label: 'what a sunny day',
        like: postImage
    },
    {
        id: Math.random().toFixed(4),
        username: 'laura.ssantos',
        image: postImage,
        profile: postImage,
        label: 'what a sunny day',
        like: postImage
    },
]

export default function Feed(){
    return(
        <SafeAreaView style={styles.container}>
            <FlatList 
                ListHeaderComponent={<Stories></Stories>}
                keyExtractor={(item) => {item.id}} 
                data={data} 
                renderItem={(post)=> <Post 
                                        username={post.item.username} 
                                        profile={post.item.profile} 
                                        label={post.item.label}
                                        image={post.item.image}
                                        like={post.item.like} {...post}/>}    
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        height: '100%',
    }
})