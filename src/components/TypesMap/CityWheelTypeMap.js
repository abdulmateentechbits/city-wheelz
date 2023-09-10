import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapViewDirections from 'react-native-maps-directions';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export const CityWheelTypeMap = ({originLocation,destinationLocation}) => {

    let latitude = 24.8607;
    let longitude = 67.0011;
    const origin = { latitude: originLocation.lat, longitude: originLocation.lng };
    const destination = { latitude: destinationLocation.lat, longitude: destinationLocation.lng };
    const GOOGLE_MAPS_APIKEY = 'AIzaSyBOJBXULaSOYB18Fieei4njUknZQJFZLLY';
    
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.1122,
                    longitudeDelta: 0.0021,
                }}
                style={styles.map}
                minZoomLevel={8}
            >
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={4}
                    strokeColor="#000000"
                />
                <Marker
                    coordinate={origin}
                    title="Origin"
                    description="Testing origin"
                />
                <Marker
                    coordinate={destination}
                    title="Destination"
                    description="Destination origin"
                />
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