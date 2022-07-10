import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Bottom from './Bottom';
import Post from '../screens/MainScreens/Post';
import Comments from '../screens/ExtraScreens/Comments';
import Settings from '../screens/ExtraScreens/Settings';
import SettingsStack from './SettingsStack';
import PostStack from './PostStack';
import Login from '../screens/AuthScreens/Login';
import Register from '../screens/AuthScreens/Register';
import Forgot from '../screens/AuthScreens/Forgot';
import OTP from '../screens/AuthScreens/OTP';

const { width, height } = Dimensions.get('screen')



const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{
                headerShown: false,
                headerTitleStyle: {
                    fontFamily: 'Header',
                    fontSize: 23
                },
                headerTitleShown: false,
                headerStyle: {
                    height: height / 9
                }
            }} >

                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />

                <Stack.Screen name="Forgot" component={Forgot} />
                <Stack.Screen name="OTP" component={OTP} 
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: () => null,
                    headerLeft: () => (
                        <View style={styles.container}>
                            <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
                            <Text style={styles.post}>OTP</Text>
                        </View>
                    ),
                })}
                />


                <Stack.Screen name="BottomMain" component={Bottom} />

                <Stack.Screen name="Post" component={PostStack}
                    options={({ navigation }) => ({
                        headerShown: false,

                    })} />

                <Stack.Screen name="Comments" component={Comments}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerTitle: () => null,
                        headerLeft: () => (
                            <View style={styles.container}>
                                <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
                                <Text style={styles.post}>Comments</Text>
                            </View>
                        ),

                    })} />

                <Stack.Screen name="settings" component={SettingsStack}
                    options={({ navigation }) => ({
                        headerShown: false,
                    })} />
            </Stack.Navigator>
        </NavigationContainer>
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