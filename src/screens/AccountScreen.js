import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import Icon from '../components/Icon'
import colors from '../config/colors'
import ListItemSeparator from '../components/ListItemSeparator'

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    },
  }
]

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title="Christopher" subTitle="christopher.leja@gmail.com"
        image={require('../images/chris.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList 
        data={menuItems}
        keyExtractor={item => item.title}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => 
          <ListItem 
            title={item.title}
            IconComponent={
              <Icon 
                name={item.icon.name}
                backgroundColor={item.icon.backgroundColor}
              />
            }
          />
        }
        >
        </FlatList>
      </View>
        <ListItem title="Log Out" 
        IconComponent={
          <Icon name="logout" backgroundColor={colors.yellow}/>
        }
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light
  }
})
