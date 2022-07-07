import { View, Text, Pressable, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Post from '../screens/MainScreens/Post'
import ChooseColor from '../screens/ExtraScreens/ChooseColor';
import ChooseFont from '../screens/ExtraScreens/ChooseFont';
import ShowPost from '../screens/ExtraScreens/ShowPost';
import EditPost from '../screens/ExtraScreens/EditPost';



const PostTabs = createStackNavigator();
const { width, height } = Dimensions.get('screen')

export default function PostStack() {
    return (
        <PostTabs.Navigator
            initialRouteName='mainPost'
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'Header',
                    fontSize: 23
                },
            }}
        >
            <PostTabs.Screen name="mainPost" component={Post}
                options={({ navigation }) => ({
                    headerTitle: () => null,
                    headerLeft: () => (
                        <View style={styles.container}>
                            <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
                            <Text style={styles.post}>Post</Text>
                        </View>
                    ),
                })}
            />
            <PostTabs.Screen name="editPost" component={EditPost}
                options={({ navigation }) => ({
                    headerTitle: () => null,
                    headerLeft: () => (
                        <View style={styles.container}>
                            <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
                            <Text style={styles.post}>Choose Background</Text>
                        </View>
                    ),
                })}
            />
        </PostTabs.Navigator>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,

    },
    post: {
        fontFamily: 'Header',
        fontSize: 25,
        marginLeft: 10
    }
})