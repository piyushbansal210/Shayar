import { View, Text, StyleSheet, Dimensions, SafeAreaView, TextInput, Pressable } from 'react-native'
import React from 'react'
import { StatusBar as SB } from 'expo-status-bar';

import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('screen')

export default function Post({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <SB style="dark" />
                <Text style={styles.heading}>Title</Text>
                <TextInput
                    style={styles.titleText}
                    placeholder="Title"
                />
                <Text style={styles.heading}>Shayari</Text>
                <TextInput
                    style={styles.shayariText}
                    multiline={true}
                    placeholder="Shayari"
                />




            </View>
            <Pressable style={{
                position: 'absolute',
                width: '100%',
                bottom: 20,
                alignSelf: 'center',
            }} onPress={()=>navigation.navigate('editPost')}>
                <LinearGradient
                    colors={['#FF6200', '#FF6200', '#FD9346']}
                    style={styles.button}>

                    <Text style={styles.textLogo}>Next</Text>
                    <AntDesign name="arrowright" size={24} color="white" />
                </LinearGradient>
            </Pressable>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor:'#FCFCFC'
    },
    heading: {
        fontFamily: 'Header',
        fontSize: 20,
        marginBottom: 4
    },
    shayariText: {
        fontFamily: 'SemiBold',
        fontSize: 17,
        backgroundColor: '#f2f2f2',
        padding: 10,
        height: height / 3,
        textAlignVertical: 'top',
    },
    titleText: {
        fontFamily: 'SemiBold',
        fontSize: 17,
        backgroundColor: '#f2f2f2',
        padding: 10,
        marginBottom: 15
    },
    button: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        
        flexDirection: 'row'
    },
    textLogo: {
        fontFamily: 'Header',
        color: 'white',
        fontSize: 17
    }
})