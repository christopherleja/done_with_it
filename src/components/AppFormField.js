import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFormikContext } from 'formik'

import AppTextInput from './AppTextInput'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({ name, ...otherProps }) {
  
  const {setFieldTouched, handleChange, errors, touched } = useFormikContext()
  
  return (
    <>
    <AppTextInput 
      onChangeText={handleChange(name)}
      {...otherProps}
      onBlur={() => setFieldTouched(name)}
      />

      <ErrorMessage 
      visible={touched[name]} 
      error={errors[name]}
      />
    </>
  )
}

const styles = StyleSheet.create({})
