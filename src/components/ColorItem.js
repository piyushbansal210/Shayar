import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ColorItem(props) {
  return (
    <TouchableOpacity style={styles.container} >
      <View style={[styles.profile, {
        backgroundColor: props.color
      }]}>
        <Text style={[styles.title, { color:'white' }]}>{props.color}</Text>
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    flex: 1 / 3,
  },
  profile: {
    flex: 1,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4
  },
  title: {
    fontFamily: 'Header',
    color: 'black'
  }
})