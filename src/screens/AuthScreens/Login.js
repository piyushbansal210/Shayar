import { View, Text, StyleSheet, Platform, StatusBar, Image, Dimensions, TextInput, Pressable } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';

import LOGIN from '../../assets/images/login.jpg'
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen')

export default function Login({ navigation }) {
    return (
        <ScrollView  style={{ backgroundColor: 'white' }}>

            <View style={styles.container}>
                <View style={styles.imageContainer}>

                    <Image
                        source={LOGIN}
                        style={styles.image}
                    />

                    <Text style={styles.logo}>Login</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Username"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                    />
                </View>

                <Pressable style={{
                    width: '100%',
                    marginTop: 20,
                    alignSelf: 'center',
                }} onPress={() => navigation.navigate('BottomMain')}>
                    <LinearGradient
                        colors={['#c08b00', '#ffc801', '#ffe694']}
                        style={styles.button}>

                        <Text style={styles.textLogo}>Login</Text>
                    </LinearGradient>
                </Pressable>

                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>
                    <Text style={styles.createAccount}>Don't have an Account? </Text>
                    <Pressable style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}><Text style={styles.register}>Create One</Text></Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
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
        fontFamily: 'Header',
    },

    register: {
        fontFamily: 'Header',
        color: '#24a0ed'
    }
})