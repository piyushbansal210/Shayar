import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'

import ProfilePost from '../../components/ProfilePost'

const user = {
  name:'Aman Dhattarwal',
  imageUser:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  bio:'Just another homosapein living on this rock, Floating in the sky',
  numberOfPosts:6,
  followers:200,
  following:156
}

export default function FavSave(props) {

  const [data, setData] = useState(props.route.params.data)

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={{ marginBottom: 3,marginTop:3 }}
        renderItem={({ item }) => <ProfilePost data={item} user={user}  navigation={props.navigation} screen={'postDisplay'}/>}
        keyExtractor={(item, index) => index}
        numColumns={3}
        key={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC'
  }
})