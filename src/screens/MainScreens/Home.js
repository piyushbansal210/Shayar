import { View, Text, StyleSheet, ScrollView, Platform, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar as SB } from 'expo-status-bar';

import SinglePost from '../../components/SinglePost';


const fakePost={
    id:1,
    userName:'Aman Dhattarwal',
    userImage:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    post:{
        backgroundColor:'#668751',
        title:'This is my First Post',
        quote:'An Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor AwayAn Apple A day Keeps the doctor Away',
        titleColor:'#FFFFFF',
        quoteColor:'#FFFFFF',
    },
    numberOfLikes:200,
    caption:'Hey Did you like my first post',
    numberOfComment:50,
}

const fakePost2={
    id:1,
    userName:'Piyush Bansal',
    userImage:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    post:{
        backgroundColor:'#de0A26',
        title:'I am Joey Tribianni',
        quote:'Hey How you doin\' ',
        titleColor:'#FFFFFF',
        quoteColor:'#FFFFFF',
    },
    numberOfLikes:200,
    numberOfComment:50,
}


export default function Home({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <SB style="dark" />
                <View style={{height:10}}/>
                <SinglePost navigation={navigation} post={fakePost}/>
                <SinglePost  navigation={navigation} post={fakePost2}/>
                <SinglePost navigation={navigation} post={fakePost}/>
                <SinglePost  navigation={navigation} post={fakePost2}/>
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