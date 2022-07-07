import { View, Text, StyleSheet, TextInput, Dimensions, Pressable,ScrollView } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen');

import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Suggestions() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <View>
        <Text style={styles.title}>Title</Text>
        <TextInput
          placeholder='Title'
          style={styles.input}
        />
      </View>

      <Text style={styles.title}>Suggestions</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Suggestions"
      />
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    paddingTop:15
  },
  textInput: {
    padding: 10,
    height: height / 2,
    textAlignVertical: 'top',
    fontFamily: 'SemiBold',
    backgroundColor: '#efefef',
    margin: 15,
    fontSize: 16
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  textLogo: {
    fontFamily: 'Header',
    color: 'white',
    fontSize: 17
  },
  input: {
    backgroundColor: '#efefef',
    padding: 8,
    marginBottom: 0,
    fontFamily: 'SemiBold', marginHorizontal: 15,
    marginTop: 10,
    marginBottom:20
  },
  title:{
    fontFamily:'SemiBold',
    marginHorizontal:15
  },
})