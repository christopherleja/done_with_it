import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'

export default function AppFormPicker({ 
  items, 
  name, 
  numberOfColumns,
  PickerItemComponent,
  placeholder, 
  width }) {
  const { errors, setFieldValue, touched, values} = useFormikContext()
  
  return (
    <>
    <AppPicker
    items={items}
    numberOfColumns={numberOfColumns}
    onSelectItem={item => setFieldValue(name, item)}
    placeholder={placeholder}
    selectedItem={values[name]}
    width={width}
    PickerItemComponent={PickerItemComponent}
    />
    <ErrorMessage error={errors} visible={touched[name]}/>
    </>
  )
}

