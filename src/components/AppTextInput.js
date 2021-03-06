import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'


export default function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      { icon && <MaterialCommunityIcons 
          size={25} 
          style={styles.icon} 
          name={icon} 
          />
        }
      <TextInput 
        placeholderTextColor={colors.grey}
        {...otherProps} 
        style={defaultStyles.text} 
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10
  }, 
  icon: {
    color: colors.grey,
    marginRight: 10,
  },
})
