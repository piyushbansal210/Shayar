import { View, Text, Pressable, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import FavSave from '../screens/ExtraScreens/FavSave';
import Terms from '../screens/ExtraScreens/Terms';
import Suggestions from '../screens/ExtraScreens/Suggestions';
import Settings from '../screens/ExtraScreens/Settings';
import Policy from '../screens/ExtraScreens/Policy';
import EditProfile from '../screens/ExtraScreens/EditProfile';
import ChangePassword from '../screens/ExtraScreens/ChangePassword';
import PostDisplay from '../screens/ExtraScreens/PostDisplay';



const SettingTabs = createStackNavigator();
const { width, height } = Dimensions.get('screen')

export default function SettingsStack() {
    return (
        <SettingTabs.Navigator
            initialRouteName='indexSetting'
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'Header',
                    fontSize: 23
                },
            }}
        >
            <SettingTabs.Screen name="indexSetting" component={Settings}
                options={({ navigation, route }) => ({
                    headerTitle: 'Settings',
                    headerLeft: () => (
                        <View style={styles.container}>
                            <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
                        </View>
                    ),
                })}
            />
            <SettingTabs.Screen name="FavSave" component={FavSave}
                options={({ navigation, route }) => ({
                    headerTitle: route.params.title,
                    headerLeft: () => (
                        <View style={styles.container}>
                            <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
                        </View>
                    ),
                })}
            />
            <SettingTabs.Screen name="Terms" component={Terms}
                options={({ navigation, route }) => ({
                    headerTitle: 'Terms and Conditions',
                    headerLeft: () => (
                        <View style={styles.container}>
                            <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
                        </View>
                    ),
                })}
            />
            <SettingTabs.Screen name="Suggestions" component={Suggestions}
                options={({ navigation, route }) => ({
                    headerTitle: 'Suggestions',
                    headerLeft: () => (
                        <View style={styles.container}>
                            <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
                        </View>
                    ),
                })}
            />
            <SettingTabs.Screen name="Policy" component={Policy}
                options={({ navigation, route }) => ({
                    headerTitle: 'Privacy Policy',
                    headerLeft: () => (
                        <View style={styles.container}>
                            <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
                        </View>
                    ),
                })}
            />
            <SettingTabs.Screen name="EditProfile" component={EditProfile}
                options={({ navigation, route }) => ({
                    headerTitle: 'Edit Profile',
                    headerLeft: () => (
                        <View style={styles.container}>
                            <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
                        </View>
                    ),
                })}
            />
            <SettingTabs.Screen name="ChangePassword" component={ChangePassword}
                options={({ navigation, route }) => ({
                    headerTitle: 'Change Password',
                    headerLeft: () => (
                        <View style={styles.container}>
                            <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
                        </View>
                    ),
                })}
            />
            <SettingTabs.Screen name="postDisplay" component={PostDisplay}
                options={({ navigation, route }) => ({
                    headerTitle: route.params.userName,
                    headerLeft: () => (
                        <View style={styles.container}>
                            <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
                        </View>
                    ),
                })}
            />
        </SettingTabs.Navigator>
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