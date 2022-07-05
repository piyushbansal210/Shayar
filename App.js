import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import MainStack from './src/navigation/MainStack';

import Splash from './src/screens/ExtraScreens/Splash'

export default function App() {
  
  const [loaded] = useFonts({
    Black: require('./src/assets/fonts/Black.ttf'),
    Bold: require('./src/assets/fonts/Bold.ttf'),
    Header: require('./src/assets/fonts/Header.ttf'),
    Medium: require('./src/assets/fonts/Medium.ttf'),
    Regular: require('./src/assets/fonts/Regular.ttf'),
    SemiBold: require('./src/assets/fonts/SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <MainStack/>
  );
}
