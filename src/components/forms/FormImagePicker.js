import React from 'react'
import { useFormikContext } from 'formik'

import { ErrorMessage } from '.'
import ImageInputList from '../ImageInputList'


export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values} = useFormikContext()
  
  const imageUris = values[name]

  const handleAdd = uri => {
    setFieldValue(name, [...imageUris, uri]);
  }
  
  const handleRemove = uri => {
    setFieldValue(name, imageUris.filter(imgUri => imgUri !== uri))
  }

  return (
    <>
      <ImageInputList 
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
        />
      <ErrorMessage error={errors} visible={touched[name]}/>
    </>
  )
}

const styles = StyleSheet.create({})
