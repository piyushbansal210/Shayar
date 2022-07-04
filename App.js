import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './src/screens/MainScreens/Home'
import MainStack from './src/navigation/MainStack';

import Splash from './src/screens/ExtraScreens/Splash'

export default function App() {
  
  const [loaded] = useFonts({
    Black: require('./src/assets/fonts/Black.otf'),
    Bold: require('./src/assets/fonts/Bold.otf'),
    Demi: require('./src/assets/fonts/Demi.otf'),
    Header: require('./src/assets/fonts/Header.ttf'),
    Heavy: require('./src/assets/fonts/Heavy.otf'),
    Light: require('./src/assets/fonts/Light.otf'),
    Medium: require('./src/assets/fonts/Medium.otf'),
    Regular: require('./src/assets/fonts/Regular.otf'),
    SemiLight: require('./src/assets/fonts/SemiLight.otf'),
    Thin: require('./src/assets/fonts/Thin.otf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Splash/>
  );
}
