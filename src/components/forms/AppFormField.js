import React from 'react'
import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({ name, width, ...otherProps }) {
  
  const {setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext()
  
  return (
    <>
    <AppTextInput 
      onChangeText={(text) => setFieldValue(name, text)}
      value={values[name]}
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
