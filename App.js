import { useFonts } from 'expo-font';

import MainStack from './src/navigation/MainStack';
import { StatusBar as SB } from 'expo-status-bar';
import Splash from './src/screens/ExtraScreens/Splash'

import {View, Text} from 'react-native'

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
    <View style={{flex:1}}>
      <SB style="dark" backgroundColor='white'/>
      <MainStack />
    </View>
  );
}
