import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'


export default function AppText({ children, style }) {
  return (
  <Text style={[styles.text, style]}>{children}</Text>
  )
}


// const styles = StyleSheet.create({
//   text: {
//     color: "tomato",
//     ...Platform.select({
//       ios: {
//         fontSize: 20,
//         fontFamily: "Avenir"
//       },
//       android: {
//         fontSize: 20,
//         fontFamily: "Roboto"
//       },
//     })
//   }
// })

