import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, ScrollView } from 'react-native'
import React from 'react'

import { FontAwesome } from '@expo/vector-icons';


import CommentInput from '../../components/CommentInput';
import Comment from '../../components/Comment';

const fakeComment={
    id:1,
    userName:'Aman Dhattarwal',
    userImage:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    comment:'This is the default crop mode formatting.'
}


export default function Comments() {
    return (
        <KeyboardAvoidingView style={styles.containerkeyboard} >

            <View style={styles.container}>
                <ScrollView style={styles.comments}>
                   <Comment data={fakeComment}/>


                </ScrollView>
                <CommentInput/>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
    },
    commentInput: {
        flexDirection: 'row',
        margin:15,
        alignItems: 'center',
    },
    comments: {
        flex: 1,

    },
    textInput: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        padding:10,
        fontFamily:'Header',
        marginRight:10
    },
    containerkeyboard: {
        flex: 1
    }
})