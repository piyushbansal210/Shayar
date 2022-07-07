import { View, Text, StyleSheet, Image, Dimensions, Pressable, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const { width, height } = Dimensions.get('screen');

import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ChangePassword() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Current Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Current Password"
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Enter Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter New Password"
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>ReEnter Password</Text>
        <TextInput
          placeholder="Re-Enter New Password"
          style={styles.textInput}
        />
      </View>

      <TouchableOpacity onPress={() => setFollowed(!followed)}>
        <LinearGradient
          colors={['#FF6200', '#FF6200', '#FD9346']}
          style={[styles.button]}>

          <Text style={[styles.buttonText]}>Change Password</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    padding: 15
  },
  textInput: {
    backgroundColor: '#f8f8f8',
    fontFamily: 'SemiBold',
    padding: 10
  },
  title: {
    fontFamily: 'Header',
    marginBottom: 4
  },
  innerContainer: {
    marginBottom: 20
  },
  button: {
    padding: 8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FF6200',
    marginBottom: 3
  },
  buttonText: {
    fontFamily: 'Bold',
    color:'white'
  }
})