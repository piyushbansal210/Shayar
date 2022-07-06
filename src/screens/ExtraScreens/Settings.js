import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Settings() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.design}>Invite your Friends</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.design}>Rate Us</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.design}>Change Password</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.design}>Edit Profile</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.design}>Favourite Shayaris</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.design}>Saved Shayaris</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.design}>Privacy Policy</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.design}>Terms An Conditions</Text>
            </View>
            <LinearGradient
                colors={['#FF6200', '#FF6200', '#FD9346']}
                style={styles.button}>

                <Text style={styles.textLogo}>Logout</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1,
        backgroundColor:'#FCFCFC'
    },
    design: {
        fontFamily: 'SemiBold',
        fontSize: 16
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        backgroundColor:'#f8f8f8',
        paddingHorizontal:20,
        paddingVertical:10
    },
    logout:{
        fontFamily: 'SemiBold',
        fontSize: 16,
        color:'#de0A26'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        backgroundColor:'#f8f8f8',
        paddingHorizontal:20,
        paddingVertical:10
    },
    textLogo: {
        fontFamily: 'Header',
        fontSize: 16,
        color:'white',
    }
})