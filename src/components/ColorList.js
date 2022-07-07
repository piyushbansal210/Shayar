import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ColorItem from './ColorItem'

export default function ColorList(props) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.container}
      data={props.data}
      renderItem={({ item }) => <ColorItem color={item} />}
      keyExtractor={(item) => item}
      ListFooterComponentStyle={styles.listFooter}
      ListFooterComponent={<View style={{}}/>}
      numColumns={3}
      key={item=>item}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15
  },
  listFooter:{
    marginBottom:30
  }
})