import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

export default function SinglePost(props) {

    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <View style={styles.upperLeftContainer}>
                    <Image source={{ uri: props.post.userImage }} style={styles.image} />
                    <Text numberOfLines={1} style={styles.userName}>{props.post.userName}</Text>
                </View>
                <MaterialCommunityIcons name="dots-vertical" size={30} color="black" />
            </View>
            <View style={[styles.post, {
                backgroundColor: props.post.post.backgroundColor
            }]}>
                <Text style={[styles.title, { color: props.post.post.titleColor }]}>{props.post.post.title}</Text>
                <Text style={[styles.quote, { color: props.post.post.quoteColor, fontFamily: props.post.post.font ? props.post.post.font : 'Header' }]}>{props.post.post.quote}</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomLeftContainer}>
                    <FontAwesome name="heart" size={30} color="#de0A26" style={{ marginRight: 20 }} />
                    <FontAwesome name="comment-o" size={30} color="black" style={{ marginRight: 20 }}  onPress={()=>props.navigation.navigate('Comments')}/>
                    <Ionicons name="paper-plane-outline" size={30} color="black" />
                </View>
                <FontAwesome name="bookmark-o" size={30} color="black" />
            </View>

            <View>
                <Text style={styles.likesCount}>{props.post.numberOfLikes} Likes</Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Comments')}>
                    <Text style={styles.commentCount}>View All {props.post.numberOfComment} Comments </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginBottom: 20,
    },
    postContainer: {

    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomLeftContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: width / 9,
        height: width / 9,
        borderRadius: 50
    },
    upperContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    upperLeftContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    userName: {
        fontFamily: 'Header',
        marginLeft: 6,
        fontSize: 15,
        flex: 1,

    },
    post: {
        width: width,
        marginHorizontal: -15,
        marginTop: 7,
        marginBottom: 7,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        minHeight: width
    },
    title: {
        fontFamily: 'Header',
        fontSize: 22,
        marginBottom: 10

    },
    quote: {
        fontFamily: 'Header',
    },
    likesCount: {
        fontFamily: 'Header',
        marginTop: 3
    },
    commentCount: {
        fontFamily: 'Header',
        color: '#8d8d8d'
    }
})
