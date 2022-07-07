import { View, Text, StyleSheet, Image, Dimensions, TextInput, Pressable, ImageBackground } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const user = {
  name: 'Aman Dhattarwal',
  imageUser: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  bio: 'Just another homosapein living on this rock, Floating in the sky',
  numberOfPosts: 6,
  followers: 200,
  following: 156
}

const { width, height } = Dimensions.get('screen')

export default function EditProfile() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginBottom: 30 }}>
        <ImageBackground
          source={{ uri: user.imageUser }}
          imageStyle={{}}
          style={styles.image}
        >
        </ImageBackground>
        <Pressable style={{
          marginTop:10
        }} >
          <LinearGradient
            colors={['#FF6200', '#FF6200', '#FD9346']}
            style={[styles.button,{padding:5}]}>

            <Text style={styles.textLogo}>Change Image</Text>
          </LinearGradient>
        </Pressable>
      </View>

      <View>
        <Text style={styles.title}>Name</Text>
        <TextInput
          placeholder='Name'
          style={styles.input}
        />
      </View>

      <View>
        <Text style={styles.title}>UserName</Text>
        <TextInput
          placeholder='UserName'
          style={styles.input}
        />
      </View>

      <View>
        <Text style={styles.title}>Bio</Text>
        <TextInput
          placeholder='Bio'
          style={styles.input}
        />
      </View>

      <Pressable style={{
        width: '100%',
        marginTop: 20,
        alignSelf: 'center',
      }} >
        <LinearGradient
          colors={['#FF6200', '#FF6200', '#FD9346']}
          style={styles.button}>

          <Text style={styles.textLogo}>Send your Suggestions</Text>
        </LinearGradient>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    padding: 15,
    paddingTop: 25
  },
  image: {
    width: width / 3,
    aspectRatio: 1,
    justifyContent: 'flex-end',
    borderRadius: width / 2,
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'SemiBold',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#efefef',
    padding: 8,
    marginBottom: 20,
    fontFamily: 'SemiBold'
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textLogo: {
    fontFamily: 'Header',
    color: 'white',
    fontSize: 17
  },
})