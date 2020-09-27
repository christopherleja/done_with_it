import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import AppText from './AppText'
import Icon from './Icon'

export default function CategoryPickerItem({
  item,
  onPress
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon 
          backgroundColor={item.backgroundColor} 
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%'
  },
  label: {
    marginTop: 5,
    textAlign: 'center'
  }
})
