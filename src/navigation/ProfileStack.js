import { View, Text, Pressable, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import Profile from '../screens/MainScreens/Profile';
import FFList from '../screens/ExtraScreens/FFList';
import PostDisplay from '../screens/ExtraScreens/PostDisplay';

const ProfileTabs = createStackNavigator();
const { width, height } = Dimensions.get('screen')

export default function ProfileStack() {
    return (
        <ProfileTabs.Navigator
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
            <ProfileTabs.Screen name="main" component={Profile}
                options={({ navigation }) => ({
                    headerTitle: 'Profile',
                    headerRight: () => (
                        <Pressable onPress={() => navigation.navigate('settings')} style={{ marginRight: 20 }}>
                            <SimpleLineIcons name="settings" size={24} color="black" />
                        </Pressable>
                    )
                })}
            />
            <ProfileTabs.Screen name="list" component={FFList}
                options={({ navigation, route }) => ({
                    headerTitle: route.params.title,
                    headerLeft: () => (
                        <View style={styles.container}>
                            <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
                        </View>
                    ),
                })}
            />
            <ProfileTabs.Screen name="display" component={PostDisplay}
                options={({ navigation, route }) => ({
                    headerTitle: route.params.userName,
                    headerLeft: () => (
                        <View style={styles.container}>
                            <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
                        </View>
                    ),
                })}
            />
        </ProfileTabs.Navigator>
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