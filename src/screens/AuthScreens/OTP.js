import { View, Text, StyleSheet, Platform, StatusBar, Image, Dimensions, TextInput, Pressable } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';

import LOGIN from '../../assets/images/login.jpg'
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen')

export default function OTP({ navigation }) {
    return (

            <View style={styles.container}>
                <Text style={styles.title}>We have send an OTP to the number you have registered</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="OTP"
                />

                <Pressable style={{
                    width: '100%',
                    alignSelf: 'center',
                }} onPress={() => navigation.navigate('BottomMain')}>
                    <LinearGradient
                        colors={['#c08b00', '#ffc801', '#ffe694']}
                        style={styles.button}>

                        <Text style={styles.textLogo}>OTP</Text>
                    </LinearGradient>
                </Pressable>

                <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 15, marginBottom: 20,marginHorizontal:15 }}>
                    <Text style={styles.createAccount}>Didn't recieve the OTP? </Text>
                    <Pressable style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}><Text style={styles.register}>Resend</Text></Pressable>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title:{
        marginHorizontal:15,
        fontFamily:'SemiBold',
    },
    image: {
        aspectRatio: 1,
        height: height / 3,
    },
    imageContainer: {
        alignItems: 'center',
    },
    logo: {
        fontFamily: 'Header',
        fontSize: 30,
        marginTop: 20,
        marginHorizontal: 15
    },
    textInput: {
        backgroundColor: '#f2f2f2',
        marginHorizontal: 15,
        marginTop: 15,
        padding: 10,
        fontFamily: 'SemiBold',
    },
    button: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 20
    },
    textLogo: {
        fontFamily: 'SemiBold',
        color: 'white',
        fontSize: 17
    },
    createAccount: {
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Header',
    },

    register: {
        fontFamily: 'Header',
        color: '#24a0ed'
    }
})