import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const TypeRowField = ({ data }) => {
  return (
    <View style={styles.container}>
      {
        data.description === 'Home' ? <Entypo name="home" size={24} color="black" /> : data.description === 'Office' ? <MaterialCommunityIcons name="office-building" size={24} color="black" /> : data.description === 'Current Location' ? <MaterialIcons name="my-location" size={24} color="black" />: <Entypo name="location-pin" size={24} color="black" />
      }

      <Text style={{ marginLeft: 10, }}>{data.description || data?.vicinity}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 12

  },

  map: {
    minHeight: "100%",
    minWidth: "100%",
  }

})