import { View, Text, StyleSheet, ScrollView, Platform, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar as SB } from 'expo-status-bar';


export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <SB style="dark" />
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