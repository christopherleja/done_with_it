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


export default function App() {
  
  const categories = [
    { label: "Furniture", value: 1},
    { label: "Clothing", value: 2},
    { label: "Sporting Goods", value: 3},
    { label: "Other Stuff", value: 4}
  ]
  
  const [category, setCategory ] = useState(categories[0])
  return (
    <>
    <Screen>
      <AppPicker 
        items={categories} 
          icon='apps'
          placeholder="category"
          selectedItem={category}
          onSelectItem={item => setCategory(item)}
          />
      <AppTextInput icon="email" placeholder="email"></AppTextInput>
      
    </Screen>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
