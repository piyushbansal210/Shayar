import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'

import SinglePost from '../../components/SinglePost'

const fakePost={
    id:1,
    userName:'Aman Dhattarwal',
    userImage:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    post:{
        backgroundColor:'#3F1CF2',
        title:'This is my First Post',
        quote:'An Apple A day Keeps the doctor Away',
        titleColor:'#FFFFFF',
        quoteColor:'#FFFFFF',
    },
    numberOfLikes:200,
    caption:'Hey Did you like my first post',
    numberOfComment:50,
}

export default function PostDisplay({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <SinglePost navigation={navigation} post={fakePost}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FCFCFC',
        paddingTop:10
    }
})