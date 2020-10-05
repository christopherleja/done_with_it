import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import * as Progress from 'react-native-progress'

import LottieView from 'lottie-react-native'
import colors from '../config/colors'

export default function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        { progress < 1 ?
        <Progress.Bar 
          progress={progress} 
          color={colors.primary} width={200}
          /> : 
        <LottieView 
          source={require('../images/animations/done.json')} autoPlay 
          loop={false}
          onAnimationFinish={onDone}
          style={styles.animation}
          />
        }
        
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  animation: {
    width: 150
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
