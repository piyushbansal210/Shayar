import { View, Text, StyleSheet, TextInput, } from 'react-native'
import React from 'react'

import { FontAwesome } from '@expo/vector-icons';

export default function CommentInput() {
    return (
        <View style={styles.commentInput}>
            <TextInput
                style={styles.textInput}
                placeholder="Comment..."
            />
            <FontAwesome name="paper-plane" size={24} color="#bebebe" />

        </View>
    )
}


const styles = StyleSheet.create({
    commentInput: {
        flexDirection: 'row',
        margin: 15,
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        padding: 10,
        fontFamily: 'Header',
        marginRight: 10
    },
})