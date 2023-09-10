import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CityWheelTypeMap, CityWheelTypes, GoogleMapHome, WhereToGo } from '../../components'

export const SearchResultScreen = ({ navigation, route }) => {
  console.log("route?.params",route?.params);

  const originLocation = route?.params.originPlace?.details.geometry.location;
  console.log("originLocation",originLocation);

  const destinationLocation = route?.params.destinationPlace?.details.geometry.location;
  console.log("destinationLocation",destinationLocation);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <CityWheelTypeMap originLocation={originLocation} destinationLocation={destinationLocation} />
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
