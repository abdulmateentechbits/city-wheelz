import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TypeRowField } from '../../components';

navigator.geolocation = require('@react-native-community/geolocation');

const GOOGLE_MAPS_APIKEY = 'AIzaSyBOJBXULaSOYB18Fieei4njUknZQJFZLLY';

const homePlace = {
  description: 'Home',
  geometry: {
    location: {
      lat: 24.919526517196118,
      lng: 67.10962313101186
    }
  }
}
const officePlace = {
  description: 'Office',
  geometry: {
    location: {
      lat: 24.927017014047195,
      lng: 67.09519771931
    }
  }
}


export const DestinationSearchScreen = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const originPlaceRef = useRef();
  const destinationPlaceRef = useRef();


  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <View style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}>
        <GooglePlacesAutocomplete
          ref={originPlaceRef}
          placeholder='Current Location'
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          fetchDetails
          suppressDefaultStyles
          currentLocation
          currentLocationLabel="Current Location"
          enablePoweredByContainer={false}
          styles={{
            container: {
              position: 'absolute',
              top: 20,
              left: 0,
              right: 0,

            },
            listView: {
              borderBottomWidth: 1,
              borderBottomColor: 'lightgrey',
              position: 'absolute',
              top: 120,

            },
            textInput: {
              fontSize: 16,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              marginLeft: 18,
              marginRight: 5,
              backgroundColor: 'lightgrey'

            },


          }}

          renderRow={(data) => <TypeRowField data={data} />}
          renderDescription={(data) => data.description || data?.vicinity}
          predefinedPlaces={[homePlace, officePlace]}

        />
        <GooglePlacesAutocomplete
          ref={destinationPlaceRef}
          placeholder='Where to go?'
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          fetchDetails
          suppressDefaultStyles
          enablePoweredByContainer={false}
          styles={{
            container: {
              position: 'absolute',
              top: 85,
              left: 0,
              right: 0,
            },
            listView: {
              position: 'absolute',
              borderBottomWidth: 1,
              borderBottomColor: 'lightgrey',
              top: 55
            },
            textInput: {
              fontSize: 16,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              marginLeft: 18,
              marginRight: 5,
              backgroundColor: 'lightgrey'
            },
          }}
          renderRow={(data) => <TypeRowField data={data} />}
          predefinedPlaces={[homePlace, officePlace]}
        />

        <View style={{ borderRadius: 10, width: 5, height: 5, backgroundColor: 'lightgrey', position: 'absolute', top: 40, left: 5 }} />
        <View style={{ width: 1, height: 69, backgroundColor: 'lightgrey', position: 'absolute', top: 43, left: 7 }} />
        <View style={{ width: 5, height: 5, backgroundColor: '#000000', position: 'absolute', top: 110, left: 5 }} />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})