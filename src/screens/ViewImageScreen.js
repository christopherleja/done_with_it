import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import colors from '../config/colors'

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}/>
      <View style={styles.deleteIcon}/>
      <Image 
      resizeMode='contain'
      style={styles.image}
      source={require('../images/chair.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    left: 30
  },
  container: {
    backgroundColor: colors.black,
    flex: 1
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    right: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
})
