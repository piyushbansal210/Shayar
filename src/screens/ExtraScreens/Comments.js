import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Comments() {
  return (
    <View style={styles.container}>
      <Text>Comments</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FCFCFC',
    }
})