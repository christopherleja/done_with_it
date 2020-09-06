import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'

import colors from '../config/colors'

export default function WelcomeScreen() {
  return (
    <ImageBackground 
    source={require('../images/background.jpg')}
    style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image 
        style={styles.logo}
        source={require('../images/logo-red.png')}
        />
        <Text>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary
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
})

