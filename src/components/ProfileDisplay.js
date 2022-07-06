import { View, Text, StyleSheet, Image, Dimensions, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const { width, height } = Dimensions.get('screen');

import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const following = [
    {
        id: 1,
        userName: "Piyush Bansal",
        userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: 2,
        userName: "Tushar Gupta",
        userImage: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: 3,
        userName: "Faiz Hasan",
        userImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    },
    {
        id: 4,
        userName: "Arshdeep Singh",
        userImage: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
        id: 5,
        userName: "Sahil Jakhar",
        userImage: 'https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: 6,
        userName: "Amit Kapoor",
        userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: 7,
        userName: "Darpan Goyal",
        userImage: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: 8,
        userName: "Prabhu Deva",
        userImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    },
    {
        id: 9,
        userName: "Amritansh Bachchan",
        userImage: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
        id: 10,
        userName: "Daksh Aggarwal",
        userImage: 'https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    }
]

const followers = [
    {
        id: 1,
        userName: "Piyush Bansal",
        userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: 2,
        userName: "Tushar Gupta",
        userImage: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: 3,
        userName: "Faiz Hasan",
        userImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    },
    {
        id: 4,
        userName: "Arshdeep Singh",
        userImage: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
        id: 5,
        userName: "Sahil Jakhar",
        userImage: 'https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    }
]


export default function ProfileDisplay(props) {

    const [followed, setFollowed] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Image
                    source={{ uri: props.user.imageUser }}
                    style={styles.image}
                />
                <View style={styles.detailValue}>
                    <View style={styles.values}>
                        <Text style={styles.valueNumber}>{props.user.numberOfPosts}</Text>
                        <Text style={styles.valueDetail}>Post</Text>
                    </View>
                    <Pressable style={styles.values} onPress={() => props.navigation.navigate('list', { title: 'Followers', listData: followers })}>
                        <Text style={styles.valueNumber}>{props.user.followers}</Text>
                        <Text style={styles.valueDetail}>Followers</Text>
                    </Pressable>
                    <Pressable style={styles.values} onPress={() => props.navigation.navigate('list', { title: 'Following', listData: following })}>
                        <Text style={styles.valueNumber}>{props.user.following}</Text>
                        <Text style={styles.valueDetail}>Following</Text>
                    </Pressable>
                </View>
            </View>
            <View>
                <Text style={{ fontFamily: 'SemiBold', marginTop: 6, fontSize: 16, letterSpacing: 2 }}>{props.user.name}</Text>
            </View>
            <View>
                <Text style={{ fontFamily: 'Header', marginTop: 6, letterSpacing: 1 }}>{props.user.bio}</Text>
            </View>

            {/* <TouchableOpacity onPress={()=>setFollowed(!followed)}>
                <LinearGradient
                    colors={followed ? ['#fff', '#fff', '#fff'] : ['#FF6200', '#FF6200', '#FD9346']}
                    style={[styles.button]}>

                    <Text style={[styles.buttonText, { color: followed ? '#FF6200' : 'white' }]}>{followed ? 'Following' : 'Follow'}</Text>
                </LinearGradient>
            </TouchableOpacity> */}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 10,
        marginBottom: 20
    },
    image: {
        width: width / 5,
        aspectRatio: 1,
        borderRadius: 50
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailValue: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-evenly',

    },
    values: {
        alignItems: 'center'
    },
    valueDetail: {
        fontFamily: 'Header'
    },
    valueNumber: {
        fontFamily: 'SemiBold',
        fontSize: 20
    },
    button: {
        padding: 8,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#FF6200',
        marginBottom: 3
    },
    buttonText: {
        fontFamily: 'Bold'
    }
})