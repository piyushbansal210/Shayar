import { View, Text, StyleSheet, ScrollView, Platform, StatusBar, SafeAreaView,FlatList } from 'react-native'
import React from 'react'
import { StatusBar as SB } from 'expo-status-bar';

import ProfilePost from '../../components/ProfilePost.js';

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
]


export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <SB style="dark" />
            <FlatList
                data={posts}
                renderItem={({item})=><ProfilePost data={item}/>}
                keyExtractor={(item,index)=>index}
                numColumns={3}
                key={(item)=>item.id}
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