import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Bottom from './Bottom';
import Home from '../screens/MainScreens/Home';

const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='BottomMain' screenOptions={{
                headerShown: false
            }} >
                <Stack.Screen name="BottomMain" component={Bottom} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}