import React from 'react';
import { Alert, Keyboard } from "react-native";
import { Notifications } from 'expo'
import * as Yup from "yup";

import messagesApi from '../api/messages'
import { AppForm, AppFormField, SubmitButton } from './forms'

export default ContactSellerForm = ({ listing }) => {
  const handleSubmit = async ({ message}, { resetForm}) => {
  
    Keyboard.dismiss()
    const result = await messagesApi.send(message, listing.id)
    
    if (!result.ok){
      console.log('Error', result)
      return Alert.alert("Error", "Could not send your message at this time")
    }

    resetForm();
    
    Notifications.presentLocalNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent to the seller",
      data: {
        _displayInForeground: true
      }
    });
  };

  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField 
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller"/>
    </AppForm>
  )
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message")
})