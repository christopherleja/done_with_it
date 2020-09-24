import React, { useEffect } from 'react'
import { Image, StyleSheet, View, TouchableWithoutFeedback, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import colors from '../config/colors'


export default function ImageInput({ imageUri, onChangeImage }) {
  
  useEffect(() => {
    requestPermission();
  }, [])

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
    if (!granted){
      alert("Please enable permission to access the camera library")
    }
  }
  
  const handlePress = () => {
    if (!imageUri) selectImage()
    else Alert.alert('Delete', 'Are you sure you would like to delete this image?', [
      { text: 'Yes', onPress: () => onChangeImage(null)},
      { text: 'No'}
    ])
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });
      if (!result.cancelled)
        onChangeImage(result.uri)
    } catch (error) {
      console.log("Error Reading Image", error)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons 
        name='camera' 
        size={40} 
        color={colors.grey}
        />
        )}
      {imageUri && (
        <Image 
        source={{ uri: imageUri }}
        style={styles.image}
        />
        )}
    </View>
  </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    width: 100,
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    width: '100%',
  }
})
