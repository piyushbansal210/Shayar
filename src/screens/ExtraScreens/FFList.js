import { View, Text, StyleSheet, FlatList } from 'react-native'
import React ,{useState} from 'react'

import ListItem from '../../components/ListItem'

export default function FFList(props) {

  const [data,setData]=useState(props.route.params.listData)

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item})=>(<ListItem info={item}/>)}
        keyExtractor={(item,index)=>index}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    paddingHorizontal:15
  }
})