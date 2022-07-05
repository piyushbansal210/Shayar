import { View, Text,StyleSheet ,Image,Dimensions} from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen');

import { Ionicons } from '@expo/vector-icons';

export default function Comment(props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.data.userImage }} style={styles.image} />
      <Text style={styles.name}>{props.data.userName}  <Text style={styles.comment}>{props.data.comment}</Text></Text>
      <Ionicons name="ios-trash-bin-sharp" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:15,
        flexDirection:'row'
    },
    image: {
        width: width / 8,
        height: width / 8,
        borderRadius: 50
    },
    name:{
        fontFamily:'Header',
        marginHorizontal:10,
        flex:1
    },
    comment:{
        fontFamily:'SemiBold'
    }
})