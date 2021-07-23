import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View } from 'react-native';
import NavBarLeft from './src/navBarLeft/NavBarLeft'
import NavRight from './src/navBarRight/NavRight'
import Body from './src/body/Body'
import styles from './styles'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <NavBarLeft />
      <Body/>
      <NavRight />
    </SafeAreaProvider>
  );
}

