import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
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
import ListItem from './src/components/lists/ListItem';
import AccountScreen from './src/screens/AccountScreen';
import ListingsScreen from './src/screens/ListingsScreen';
import AppTextInput from './src/components/AppTextInput'
import AppPicker from './src/components/AppPicker';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ListingEditScreen from './src/screens/ListingEditScreen';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import ImageInput from './src/components/ImageInput';
import ImageInputList from './src/components/ImageInputList';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AuthNavigator from './src/navigation/AuthNavigator';
import navigationTheme from './src/navigation/navigationTheme';
import AppNavigator from './src/navigation/AppNavigator';

const Account = () => (
  (
    <Screen>
      <Text>Account</Text>
    </Screen>
  )
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return( 
    <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: '#eee',
      inactiveTintColor: 'black'
    }}>
      <Tab.Screen name="Welcome" component={StackNavigator} 
      options={{tabBarVisible: false, tabBarAccessibilityLabel: 'Welcome'}}/>
      <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>)
}

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}

