import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/lists/ListItem'

export default function ListingDetailsScreen({ route }) {

  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View>
        <AppText style={styles.title}> {listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
        <View>
          <ListItem style={styles.userContainer} image={require("../images/chris.jpg")} title="Christopher Leja" subTitle="3 Listings">
          </ListItem>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    // width: '100%',
    padding: 20
  },
  image: {
    width: '100%',
    height: 300
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  userContainer: {
    marginVertical: 40
  }
})
