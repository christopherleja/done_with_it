import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'

import colors from '../config/colors'
import ButtonCustom from '../components/ButtonCustom'


export default function WelcomeScreen() {
  return (
    <ImageBackground 
    source={require('../images/background.jpg')}
    style={styles.background}
    blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image 
        style={styles.logo}
        source={require('../images/logo-red.png')}
        />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.container}>
        <ButtonCustom title="login" onPress={()=> console.log('word')}/>
        <ButtonCustom title="register" onPress={()=> console.log('register')} color="secondary"/>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
  },
  container: {
    padding: 20,
    width: '100%',
    height: 200
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    top: 70,
    position: 'absolute',
    alignItems: 'center'
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary    
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20
  }
})

