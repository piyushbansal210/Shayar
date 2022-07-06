import { View, Text, StyleSheet, ScrollView, Platform, StatusBar, SafeAreaView,FlatList } from 'react-native'
import React from 'react'
import { StatusBar as SB } from 'expo-status-bar';

import ProfilePost from '../../components/ProfilePost.js';
import ProfileDisplay from '../../components/ProfileDisplay.js';

const posts = [
    {
        id: 1,
        post: {
            backgroundColor: '#EEA110',
            title: 'This is my First Post',
            quote: 'An Apple A day Keeps the doctor Away',
            titleColor: '#FFFFFF',
            quoteColor: '#FFFFFF',
        },
    },
    {
        id: 2,
        post: {
            backgroundColor: '#14E3AB',
            title: 'Wasuup guys , do you want to hear my',
            quote: 'An Apple A day Keeps the doctor Away',
            titleColor: '#FFFFFF',
            quoteColor: '#FFFFFF',
        },
    },
    {
        id: 3,
        post: {
            backgroundColor: '#54CF02',
            title: 'I am Joey Tribianni',
            quote: 'An Apple A day Keeps the doctor Away',
            titleColor: '#FFFFFF',
            quoteColor: '#FFFFFF',
        },
    },
    {
        id: 4,
        post: {
            backgroundColor: '#3F1CF2',
            title: 'I love maths, Do you',
            quote: 'An Apple A day Keeps the doctor Away',
            titleColor: '#FFFFFF',
            quoteColor: '#FFFFFF',
        },
    },
    {
        id: 5,
        post: {
            backgroundColor: '#54CF02',
            title: 'Shayari Op guys',
            quote: 'An Apple A day Keeps the doctor Away',
            titleColor: '#FFFFFF',
            quoteColor: '#FFFFFF',
        },
    },
    {
        id: 6,
        post: {
            backgroundColor: '#EEA110',
            title: 'Shayari Op guys',
            quote: 'An Apple A day Keeps the doctor Away',
            titleColor: '#FFFFFF',
            quoteColor: '#FFFFFF',
        },
    },
    {
        id: 7,
        post: {
            backgroundColor: '#54CF02',
            title: 'Shayari Op guys',
            quote: 'An Apple A day Keeps the doctor Away',
            titleColor: '#FFFFFF',
            quoteColor: '#FFFFFF',
        },
    },
    {
        id: 8,
        post: {
            backgroundColor: '#3F1CF2',
            title: 'Shayari Op guys',
            quote: 'An Apple A day Keeps the doctor Away',
            titleColor: '#FFFFFF',
            quoteColor: '#FFFFFF',
        },
    },
    {
        id: 9,
        post: {
            backgroundColor: '#14E3AB',
            title: 'Shayari Op guys',
            quote: 'An Apple A day Keeps the doctor Away',
            titleColor: '#FFFFFF',
            quoteColor: '#FFFFFF',
        },
    },
    {
        id: 10,
        post: {
            backgroundColor: '#54CF02',
            title: 'Shayari Op guys',
            quote: 'An Apple A day Keeps the doctor Away',
            titleColor: '#FFFFFF',
            quoteColor: '#FFFFFF',
        },
    },
    {
        id: 11,
        post: {
            backgroundColor: '#3F1CF2',
            title: 'Shayari Op guys',
            quote: 'An Apple A day Keeps the doctor Away',
            titleColor: '#FFFFFF',
            quoteColor: '#FFFFFF',
        },
    },
    {
        id: 12,
        post: {
            backgroundColor: '#54CF02',
            title: 'Shayari Op guys',
            quote: 'An Apple A day Keeps the doctor Away',
            titleColor: '#FFFFFF',
            quoteColor: '#FFFFFF',
        },
    },
    {
        id: 13,
        post: {
            backgroundColor: '#14E3AB',
            title: 'Shayari Op guys',
            quote: 'An Apple A day Keeps the doctor Away',
            titleColor: '#FFFFFF',
            quoteColor: '#FFFFFF',
        },
    },
    {
        id: 14,
        post: {
            backgroundColor: '#3F1CF2',
            title: 'Shayari Op guys',
            quote: 'An Apple A day Keeps the doctor Away',
            titleColor: '#FFFFFF',
            quoteColor: '#FFFFFF',
        },
    },
]

const user = {
    name:'Aman Dhattarwal',
    imageUser:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    bio:'Just another homosapein living on this rock, Floating in the sky',
    numberOfPosts:6,
    followers:200,
    following:156
}


export default function Profile({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <SB style="dark" />
            
            <FlatList
                data={posts}
                style={{marginBottom:3}}
                renderItem={({item})=><ProfilePost data={item} user={user} navigation={navigation}/>}
                keyExtractor={(item,index)=>index}
                numColumns={3}
                ListHeaderComponent={<ProfileDisplay navigation={navigation} user={user}/>}
                key={(item)=>item.id}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC'
    }
})