import React from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import { useNetInfo } from '@react-native-community/netinfo'

import colors from '../config/colors'
import AppText from './AppText'

export default function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection Detected </AppText>
      </View>
    )
  else return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    position: "absolute",
    top: Constants.statusBarHeight,
    width: '100%',
    zIndex: 1,
  },
  text: {
    color: colors.white,
  }
})
