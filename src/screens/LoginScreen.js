import React, { useState } from 'react'
import { StyleSheet, Image } from 'react-native'

import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import ButtonCustom from '../components/ButtonCustom'

export default function LoginScreen() {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <Screen>
      <Image 
        style={styles.logo}
        source={require('../images/logo-red.png')} 
      />
      <AppTextInput 
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress"
        />
      <AppTextInput 
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        />

      <ButtonCustom 
        title="Login" 
        onPress={() => console.log(email, password)}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  }
})
