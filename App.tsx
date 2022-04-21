import React from 'react';
import MainStack from './src/stacks/MainStack';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar backgroundColor='#000000' style='light' />
      <MainStack />
    </NavigationContainer>
  );
}
