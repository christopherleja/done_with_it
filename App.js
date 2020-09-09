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
    SafeAreaView,  
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


export default function App() {
  
  return (
    <>
    <ListingsScreen />
    {/* <AccountScreen /> */}
    {/* <MessagesScreen /> */}
    {/* <View style={{
      backgroundColor: '#f8f4f4',
      padding: 20,
      paddingTop: 100,
    }}>
      <Card
      title="red jacket for sale"
      subTitle="$100"
      image={require('./src/images/jacket.jpg')}
      >

      </Card>
    </View> */}
    {/* <ListingDetailsScreen /> */}
    {/* <ViewImageScreen /> */}
    {/* <WelcomeScreen /> */}
    
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
