import { View, Text, StyleSheet, ScrollView, Platform, StatusBar, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { StatusBar as SB } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import SinglePost from '../../components/SinglePost';


export default function Search() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <SB style="dark" />
                <View style={styles.inputContainer}>
                    <FontAwesome name="search" size={23} color="#b3b3b3" />
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                    />
                </View> 

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC'
    },
    input: {
        fontFamily: 'Header',
        marginLeft:10,
        flex:1,
        fontSize:18
    },
    inputContainer: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        margin: 15,
        flexDirection:'row',
        marginBottom:25
    },
    topPost:{
        fontFamily:'Header',
        paddingHorizontal:15,
        paddingTop:10,
        paddingBottom:10,
        fontSize:20,
        marginBottom:10
    }
})