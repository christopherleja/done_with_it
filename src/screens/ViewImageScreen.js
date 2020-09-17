import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={40}></MaterialCommunityIcons>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={40}></MaterialCommunityIcons>
      </View>
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
    position: 'absolute',
    top: 40,
    left: 30
  },
  container: {
    backgroundColor: colors.black,
    flex: 1
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
})
