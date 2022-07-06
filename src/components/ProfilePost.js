import { View, Text, StyleSheet,Dimensions ,TouchableOpacity } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen');

export default function ProfilePost(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={()=>props.navigation.navigate('display',{userName:props.user.name})}>
            <View style={[styles.profile, {
                backgroundColor: props.data.post.backgroundColor
            }]}>
                <Text numberOfLines={4} style={[styles.title,{color:props.data.post.titleColor}]}>{props.data.post.title}</Text>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        aspectRatio: 1,
        flex:1/3,
    },
    profile:{
        flex:1,
        margin:3,
        alignItems: 'center',
        justifyContent: 'center',
        padding:4
    },
    title:{
        fontFamily:'Header',
        color:'black'
    }
})