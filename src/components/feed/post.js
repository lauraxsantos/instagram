import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function Post({profile, username, image, label, like, hours}){
    return(
        <View>
            <View style={styles.title}>
                <View style={styles.name}>
                    <Image style={styles.profilePic} source={profile}></Image>
                    <Text style={{fontWeight: 'bold'}}>{username}</Text>
                </View>
                <Image style={styles.iconMore} source={require('../../assets/more.png')}></Image>
            </View>
            <Image style={styles.post} source={image}></Image>
            <View style={styles.description}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={styles.iconHeart} source={require('../../assets/heart.png')}/>
                    <Image style={styles.iconComment} source={require('../../assets/coment.png')}/>
                    <Image style={styles.iconSend} source={require('../../assets/send.png')}/>
                </View>
                <Image style={styles.iconSave} source={require('../../assets/save.png')}/>
            </View>
            <View style={styles.comment}>
                <View style={styles.liked}>
                    <Image style={styles.likepic} source={like}/>
                    <Text>Liked by </Text>
                    <Text style={{fontWeight: 'bold'}}>laura.ssantos and others</Text>
                </View>
                <View style={styles.label}>
                    <Text style={{fontWeight: 'bold'}}>{username} <Text style={{fontWeight: 'normal'}}>{" " + label}</Text></Text>
                </View>
                <View>
                    <Text style={{color: 'gray'}}>View all comments</Text>
                    <Text style={{color: 'gray', fontSize: 12}}>{hours} hours ago <Text style={{fontWeight: 'bold'}}>º See Translation</Text></Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    description:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 12,
        paddingLeft: 15,
        paddingRight: 15
    },

    name:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    title:{
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    profilePic:{
        marginRight: 10,
        width: 32,
        height: 32,
        borderRadius: 50
    },

    liked:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    label:{
        flexDirection: 'row'
    },

    likepic:{
        width: 17,
        height: 17,
        borderRadius: 50,
        marginRight: 7
    },

    comment:{
        flexDirection: 'column',
        paddingLeft: 14,
        paddingRight: 14,
        maxWidth: 380,
        paddingTop: 10
    },

    post:{
        width: '100%',
        height: 375
    },

    iconMore:{
        width: 14,
        height: 3
    },

    iconHeart:{
        width: 24,
        height: 21
    },

    iconComment:{
        width: 36,
        height: 25,
        marginLeft: 10,
        marginRight: 10
    },

    iconSend:{
        width: 23,
        height: 22
    },

    iconSave:{
        width: 21,
        height: 24
    }
})