//important files
import React from 'react'
import { Dimensions, View,Pressable } from 'react-native'

//installed librearies
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

//create Screens
import Home from '../screens/MainScreens/Home';
import Notifications from '../screens/MainScreens/Notifications'
import Post from '../screens/MainScreens/Post'
import Profile from '../screens/MainScreens/Profile'
import Search from '../screens/MainScreens/Search';

import SearchStack from './SearchStack'
import ProfileStack from './ProfileStack';

//variables
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('screen')

const Empty = () => {
    return (null)
}

export default function Bottom() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle:{
                    height:height/9
                },
                headerTitleStyle: {
                    fontFamily: 'Header',
                    fontSize: 23
                },
                tabBarStyle: {
                    height: height / 15
                },
                tabBarLabelStyle: {
                    marginBottom: 5,
                    fontFamily: 'Header',

                },
                tabBarIconStyle: {
                    marginTop: 3
                },
                tabBarInactiveTintColor: '#474646',
                tabBarActiveTintColor: '#FD9346',
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerTitle: 'Shayar',
                    tabBarIcon: ({ color }) => <Entypo name="home" size={30} color={color} />
                }}
            />
            <Tab.Screen name="Search" component={SearchStack}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color }) => <FontAwesome name="search" size={30} color={color} />
                }}
            />
            <Tab.Screen name="Empty" component={Empty}
                listeners={({ navigation }) => ({
                    tabPress: (event) => {
                        event.preventDefault();
                        navigation.navigate('Post');
                    }
                })}
                options={{
                    headerTitle: 'Post',
                    tabBarIcon: ({ color }) => <Entypo name="squared-plus" size={40} color={color} />,
                    tabBarLabel: () => null
                }}
            />
            <Tab.Screen name="Notifications" component={Notifications}
                options={{
                    headerTitle: 'Notification',
                    tabBarIcon: ({ color }) => <Ionicons name="notifications" size={30} color={color} />
                }}
            />

            <Tab.Screen name="Profile" component={ProfileStack}
                options={({ navigation }) =>({
                    headerShown:false,
                    tabBarIcon: ({ color }) => <Entypo name="user" size={30} color={color} />,
                })}
            />
        </Tab.Navigator>
    )
}