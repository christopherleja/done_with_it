import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import color from '../config/colors'
import AppText from './AppText'
import colors from '../config/colors'

export default function Card({title, subTitle, image}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
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