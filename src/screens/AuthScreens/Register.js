import { View, Text, StyleSheet, Platform, StatusBar, Image, Dimensions, TextInput, Pressable, ScrollView } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';

import { StatusBar as SB } from 'expo-status-bar';

import REGISTER from '../../assets/images/register.jpg'

const { width, height } = Dimensions.get('screen')

export default function Register({navigation}) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                <View style={styles.imageContainer}>

                    <Image
                        source={REGISTER}
                        style={styles.image}
                    />

                    <Text style={styles.logo}>Register</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email Address"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Mobile Number"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Confirm Password"
                    />

                </View>

                <Pressable style={{
                    width: '100%',
                    marginTop: 20,
                    alignSelf: 'center',
                }} 
                    onPress={()=>navigation.navigate('OTP')}
                >
                    <LinearGradient
                        colors={['#c08b00', '#ffc801', '#ffe694']}
                        style={styles.button}>

                        <Text style={styles.textLogo}>Register</Text>
                    </LinearGradient>
                </Pressable>

                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 20,marginBottom:20 }}>
                    <Text style={styles.createAccount}>Already have an Account? </Text>
                    <Pressable style={styles.buttonRegister} onPress={() => navigation.navigate('Login')}><Text style={styles.register}>Login</Text></Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
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
        fontSize: 40,
        marginTop: 20
    },
    textInput: {
        backgroundColor: '#f2f2f2',
        marginHorizontal: 25,
        marginVertical: 10,
        padding: 10,
        fontFamily: 'SemiBold',
    },
    button: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 25,
        flexDirection: 'row',
        marginTop: 20
    },
    textLogo: {
        fontFamily: 'Header',
        color: 'white',
        fontSize: 17
    },
    createAccount: {
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:'Header',
    },
    
    register: {
        fontFamily:'Header',
        color:'#24a0ed'
    }
})