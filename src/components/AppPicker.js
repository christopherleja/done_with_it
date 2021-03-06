import React, { useState } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import AppText from './AppText'
import Screen from '../components/Screen'
import PickerItem from './PickerItem'


export default function AppPicker({ 
  icon, 
  items, 
  numberOfColumns = 1,
  onSelectItem, 
  selectedItem, 
  PickerItemComponent = PickerItem, 
  placeholder, 
  width = "100%" }) {
  
  const [ modalVisible, setModalVisible ] = useState(false)

  return (
    <>
    <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
      <View style={[styles.container, { width }]}>
        { icon && 
        <MaterialCommunityIcons 
        size={25} 
          style={styles.icon} 
          name={icon} 
          />}
        
        {selectedItem ? (
          <AppText style={styles.text}>{selectedItem.label}</AppText> 
            ): ( 
          <AppText style={styles.placeholder}>{placeholder}</AppText>)}
        <MaterialCommunityIcons 
          size={25} 
          name='chevron-down'
          color={colors.grey}
          />
      </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType="slide">
      <Screen>
        <Button title="Close" onPress={() => setModalVisible(false)}/>
        <FlatList 
          data={items}
          numColumns={numberOfColumns}
          keyExtractor={item => item.value.toString()}
          renderItem={({ item }) => 
            <PickerItemComponent 
              item={item}
              label={item.label} 
              onPress={() => {
                setModalVisible(false)
                onSelectItem(item)}} 
            />}
        />
      </Screen>
    </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10
  }, 
  icon: {
    color: colors.grey,
    marginRight: 10,
  },
  text: {
    flex: 1
  },
  placeholder: {
    color: colors.grey,
    flex: 1
  }
  
})
