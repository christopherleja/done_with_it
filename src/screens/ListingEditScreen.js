import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'


import CategoryPickerItem from '../components/CategoryPickerItem'
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton
} from '../components/forms'
import FormImagePicker from '../components/forms/FormImagePicker'
import { addListings } from '../api/listings'
import Screen from '../components/Screen'
import useLocation from '../hooks/useLocation'
import UploadScreen from './UploadScreen'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
})

const categories = [
  {label: "Furniture", value: 1, backgroundColor: 'blue', icon: 'apps'},
  {label: "Clothing", value: 2, backgroundColor: 'green', icon: "email"},
  {label: "Cameras", value: 3, backgroundColor: 'red', icon: 'lock'},
]

export default function ListingEditScreen() {
  const location = useLocation();
  const [ uploadVisible, setUploadVisible ] = useState(false);
  const [ progress, setProgress ] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0)
    setUploadVisible(true)
    const result = await addListings({...listing, location}, progress => setProgress(progress));

    if (!result.ok) {
      setUploadVisible(false)
      return alert("Sorry, we couldn't save that listing");
    }

    resetForm();
  }

  return (
    <Screen style={styles.container}>
      <UploadScreen 
        progress={progress} 
        visible={uploadVisible} 
        onDone={() => setUploadVisible(false)}
        />
      <AppForm 
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title"/>
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker 
        items={categories}
        name="category"
        numberOfColumns={3}
        PickerItemComponent={CategoryPickerItem}
        placeholder="Category"
        width='50%'
        />
        <AppFormField 
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})
