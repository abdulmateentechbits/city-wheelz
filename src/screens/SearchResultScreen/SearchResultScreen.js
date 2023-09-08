import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CityWheelTypeMap, CityWheelTypes, GoogleMapHome, WhereToGo } from '../../components'

export const SearchResultScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <CityWheelTypeMap />
      </View>
      <View style={styles.bottom}>
        <CityWheelTypes />
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 3,
    backgroundColor: '#c1c1c1'
  },
  bottom: {
    flex: 2,
    backgroundColor: "#FFFFFF",
  }
})
