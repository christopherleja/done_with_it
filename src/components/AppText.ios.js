import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function AppText({ children, style }) {
  return (
  <Text style={[styles.text, style]}>{children}</Text>
  )
}


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "Avenir",
  }
})