import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Bottom from './Bottom';
import Post from '../screens/MainScreens/Post';
import Comments from '../screens/ExtraScreens/Comments';



const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='BottomMain' screenOptions={{
                headerShown: false,
                headerTitleStyle: {
                    fontFamily: 'Header',
                    fontSize: 23
                },
                headerTitleShown: false
            }} >
                <Stack.Screen name="BottomMain" component={Bottom} />

                <Stack.Screen name="Post" component={Post}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerTitle: () => null,
                        headerLeft: () => (
                            <View style={styles.container}>
                                <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
                                <Text style={styles.post}>Post</Text>
                            </View>
                        ),

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