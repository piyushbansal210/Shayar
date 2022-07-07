import { View, Text, StyleSheet, ScrollView, Platform, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar as SB } from 'expo-status-bar';

import Notify from '../../components/Notify';

const fakePost2={
    id:1,
    userName:'Aman Dhattarwal',
    userImage:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    numberOfLikes:200,
    numberOfComment:50,
    type:'follow'
}

const notify2={
    id:1,
    userName:'Piyush Bansal',
    userImage:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    numberOfLikes:200,
    numberOfComment:50,
    type:'like',
    postLiked:'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
}



export default function Notifications() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <SB style="light" />
                <Notify data={fakePost2}/>
                <Notify data={notify2}/>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FCFCFC'
    }
})