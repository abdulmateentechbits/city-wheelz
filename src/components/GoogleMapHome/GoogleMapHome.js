import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import cars from '../../utils/cars'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

export const GoogleMapHome = () => {
  let latitude = 24.919507055900183;
  let longitude = 67.1096982326245;

  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.2122,
          longitudeDelta: 0.0021,
        }}
        style={styles.map}
        showsUserLocation
        minZoomLevel={16}

      >
        {
          cars.map((item) => {
            return (
              <Marker
                coordinate={{ latitude: item.latitude, longitude: item.longitude }}
                key={item.id}
              >
                <Image
                  source={getImage(item.type)}
                  style={{
                    width: 30, height: 30, resizeMode: 'contain', transform: [{
                      rotate: `${item.heading}0deg`
                    }]
                  }}
                />
              </Marker>
            )
          })
        }
      </MapView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#a0abff',
    justifyContent: "center",
    alignItems: 'center'
  },
  map: {
    minHeight: "100%",
    minWidth: "100%",
  }
})