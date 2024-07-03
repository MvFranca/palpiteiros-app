import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { Routes } from './src/routes';
import { theme } from './src/theme';

export default function App() {

  return (
    <Routes />
  );
}
