import React from 'react'
import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'

import ButtonCustom from './ButtonCustom'

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext()
  return (
    <ButtonCustom title={title} onPress={handleSubmit}></ButtonCustom>
  )
}

const styles = StyleSheet.create({})
