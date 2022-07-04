import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';


export default function Splash() {
    return (
        <LinearGradient
            colors={['#FF6200', '#FF6200', '#FD9346']}
            style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.textLogo}>Shayar</Text>
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLogo: {
        fontFamily: 'Header',
        fontSize: 40,
        color: 'white'
    }
})