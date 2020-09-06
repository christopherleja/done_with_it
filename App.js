import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    Dimensions,
    StyleSheet, 
    Text, 
    View,
    Button,
    Image, 
    TouchableWithoutFeedback, 
    TouchableHighlight,
    TouchableOpacity,
    SafeAreaView } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from './src/screens/WelcomeScreen'
import ViewImageScreen from './src/screens/ViewImageScreen';

export default function App() {
  
  return (
    <WelcomeScreen />
    // <ViewImageScreen />
  );
}


