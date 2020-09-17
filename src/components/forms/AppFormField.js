import React from 'react'
import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({ name, width, ...otherProps }) {
  
  const {setFieldTouched, handleChange, errors, touched } = useFormikContext()
  
  return (
    <>
    <AppTextInput 
      onChangeText={handleChange(name)}
      {...otherProps}
      width={width}
      onBlur={() => setFieldTouched(name)}
      />

      <ErrorMessage 
      visible={touched[name]} 
      error={errors[name]}
      />
    </>
  )
}
