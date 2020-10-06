import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Image } from 'react-native-expo-image-cache'

import color from '../config/colors'
import AppText from './AppText'
import colors from '../config/colors'

export default function Card({title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image 
          uri={imageUrl} 
          preview={{ uri: thumbnailUrl }} 
          style={styles.image}
          tint="light"
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: color.white,
    marginBottom: 20,
    overflow: "hidden"
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    height: 200,
    width: '100%',
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold'
  },
  title: {
    marginBottom: 7,
  }, 
})