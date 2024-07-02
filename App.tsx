import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './src/screens/home/Home';
import { Routes } from './src/routes';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { theme } from './src/theme';

export default function App() {
  return (

      <GestureHandlerRootView style={{flex: 1, backgroundColor: theme.colors.branco, paddingTop: 50}}>
          <StatusBar backgroundColor='transparent' translucent style={'auto'}/>
          <Routes/>
      </GestureHandlerRootView>
  );
}

