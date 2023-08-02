import React from "react";
import { SafeAreaView, FlatList, StyleSheet} from "react-native";
import Post from "./post";
import Stories from "../story/stories";

const postImage = require('../../assets/profile-pic.jpeg');
const profileImage = require('../../assets/profile-pic.jpeg');
const profileImage2 = require('../../assets/zaynProfile.jpg');
const profileImage3 = require('../../assets/manuProfile.jpg');
const profileImage4 = require('../../assets/selenaProfile.jpg');
const postImage2 = require('../../assets/manuPost.jpeg');
const postImage3 = require('../../assets/zaynPost.jpeg');
const postImage4 = require('../../assets/selenaPost.jpeg');
const postImage5 = require('../../assets/gabiPost.png');

const data = [
    {
        id: Math.random().toFixed(4),
        username: 'laura.ssantos',
        image: postImage,
        profile: profileImage,
        label: 'what a sunny daywhat a sunny daywhat a sunny daywhat a sunny daywhat a sunny daywhat a sunny daywhat a sunny day',
        like: profileImage,
        hours: 3
    },
    {
        id: Math.random().toFixed(4),
        username: 'manuelakfouri',
        image: postImage2,
        profile: profileImage3,
        label: 'Olhinhos de sono & novidades vindo.....',
        like: profileImage,
        hours: 1
    },
    {
        id: Math.random().toFixed(4),
        username: 'zayn',
        image: postImage3,
        profile: profileImage2,
        label: '',
        like: profileImage,
        hours: 4
    },
    {
        id: Math.random().toFixed(4),
        username: 'selenagomez',
        image: postImage4,
        profile: profileImage4,
        label: 'To the person who makes me laugh harder than anyone on this planet. My OG girl. Thas my best friend. Love you T #main #day1',
        like: profileImage,
        hours: 7
    },
    {
        id: Math.random().toFixed(4),
        username: 'gabidepretas',
        image: postImage5,
        profile: postImage5,
        label: 'what a sunny day',
        like: profileImage,
        hours: 6
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
                                        like={post.item.like} 
                                        hours={post.item.hours}{...post}/>}    
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