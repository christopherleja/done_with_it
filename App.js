import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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
    SafeAreaView,
    TextInput,
    Switch,
  } from 'react-native';


import WelcomeScreen from './src/screens/WelcomeScreen'
import ViewImageScreen from './src/screens/ViewImageScreen';
import AppText from './src/components/AppText'
import ButtonCustom from './src/components/ButtonCustom';
import Card from './src/components/Card'
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import Screen from './src/components/Screen';
import Icon from './src/components/Icon'
import ListItem from './src/components/ListItem';
import AccountScreen from './src/screens/AccountScreen';
import ListingsScreen from './src/screens/ListingsScreen';
import AppTextInput from './src/components/AppTextInput'
import AppPicker from './src/components/AppPicker';
import LoginScreen from './src/screens/LoginScreen';


export default function App() {
  return (
    <>
    <LoginScreen />
  </>
  );
}

