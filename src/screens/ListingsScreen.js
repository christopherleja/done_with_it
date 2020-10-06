import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import ActivityIndicator from '../components/ActivityIndicator'
import AppText from '../components/AppText'
import ButtonCustom from '../components/ButtonCustom'
import Card from '../components/Card'
import colors from '../config/colors'
import { getListings } from '../api/listings'
import Screen from '../components/Screen'
import useApi from '../hooks/useApi'


export default function ListingsScreen({ navigation }) {

  const { data: listings, error, loading, request: loadListings } = useApi(getListings);

  useEffect(() => {
    loadListings();
  }, [])


  return (
    <Screen style={styles.screen}>
      {error && <>
        <AppText>Sorry! We couldn't retrieve the listings.</AppText>
        <ButtonCustom title="Retry" onPress={loadListings}/>
      </>}
      <ActivityIndicator visible={loading} size="large"/>
      <FlatList 
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item })=>
          <Card title={item.title}
          subTitle={'$' + item.price}
          imageUrl={item.images[0].url}
          onPress={() => navigation.navigate("ListingDetails", item)}
          thumbnailUrl={item.images[0].thumbnailUrl}
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
