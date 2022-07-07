import { View, Text, Pressable, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import SearchPage from '../screens/ExtraScreens/SearchPage';
import Search from '../screens/MainScreens/Search';
import SearchUserProfile from '../screens/ExtraScreens/SearchUserProfile';



const SearchTabs = createStackNavigator();
const { width, height } = Dimensions.get('screen')

export default function SearchStack() {
    return (
        <SearchTabs.Navigator
        initialRouteName='mainSearch'
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'Header',
                    fontSize: 23
                },
                headerStyle:{
                    height:height/9
                }
            }}
        >
            <SearchTabs.Screen name="mainSearch" component={Search}
                options={({ navigation }) => ({
                    headerTitle: 'Search',
                })}
            />
        </SearchTabs.Navigator>
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