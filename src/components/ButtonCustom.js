import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import colors from '../config/colors'

export default function ButtonCustom({title, onPress, color='primary'}) {
  
  return (
      <TouchableOpacity style={[styles.primaryBtn, {backgroundColor: colors[color] }]} onPress={onPress} >  
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  primaryBtn: {
    borderRadius: 25,
    backgroundColor: colors.primary,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  btnText: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
})
