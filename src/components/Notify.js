import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React,{useState,useEffect} from 'react'

const { width, height } = Dimensions.get('screen')

export default function Notify(props) {

    const [text,setText]=useState('');

    useEffect(() => {
      if(props.data.type === "like"){
        setText('liked your photo')
      }
      else if(props.data.type === "comment"){
        setText('commented on your shayari')
      }
      else if(props.data.type === "follow"){
        setText('started Following You')
      }
    }, [])
    

    return (
        <View style={styles.container}>
            <Image source={{ uri: props.data.userImage }} style={styles.image} />
            <Text style={styles.notifyName}>{props.data.userName} <Text style={styles.notifyDetail}>{text}</Text></Text>
            {
                props.data.type === "like"?<Image  source={{ uri: props.data.postLiked }} style={styles.imageLiked} />:null
            }
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: width / 7,
        height: width / 7,
        borderRadius: 50
    },
    notifyName: {
        fontFamily: 'Header',
        fontSize: 18,
        marginLeft: 10,
        flex: 1
    },
    notifyDetail: {
        fontFamily: 'SemiBold',
        fontSize: 16,
    },
    imageLiked:{
        width: width / 8,
        height: width / 8,
    }
})