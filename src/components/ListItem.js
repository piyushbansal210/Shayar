import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen');

export default function ListItem(props) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: props.info.userImage }}
                style={styles.image}
            />
            <Text style={styles.userName}>{props.info.userName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        marginVertical:8,
        alignItems: 'center',
        backgroundColor:'#f8f8f8',
        paddingHorizontal:10,
        paddingVertical:6
    },
    image: {
        width: width / 7,
        aspectRatio: 1,
        borderRadius:50
    },
    userName:{
        fontFamily:'SemiBold',
        fontSize:16,
        marginLeft:10
    }
})