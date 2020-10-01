import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import { getListings } from '../api/listings'
import AppText from '../components/AppText'
import ButtonCustom from '../components/ButtonCustom'


export default function ListingsScreen({ navigation }) {

  const [ listings, setListings ] = useState([]);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    loadListings()
  }, [])

  const loadListings = async () => {
    const response = await getListings()
    if (!response.ok) return setError(true)

    setError(false); 
    setListings(response.data)
  }

  return (
    <Screen style={styles.screen}>
      {error && <>
        <AppText>Sorry! We couldn't retrieve the listings.</AppText>
        <ButtonCustom title="Retry" onPress={loadListings}/>
      </>}
      <FlatList 
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item })=>
          <Card title={item.title}
          subTitle={'$' + item.price}
          imageUrl={item.images[0].url}
          onPress={() => navigation.navigate("ListingDetails", item)}
          />  
      }
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})
