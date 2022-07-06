import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function FavSave() {
  return (
    <View style={styles.container}>
      <Text>FavSave</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FCFCFC'
    }
})