import React, { useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  PermissionsAndroid,
  Platform
} from 'react-native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigators/AppNavigator';
import Geolocation from '@react-native-community/geolocation';
import {withAuthenticator} from 'aws-amplify-react-native';


function App(): JSX.Element {
  
  async function checkLocationPermission() {
    try {
      // Check if the app already has location permissions.
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
  
      if (granted) {
        console.log('Location permission already granted');
      } else {
        // Location permissions haven't been granted. Request them.
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'CityWheelz app needs access to your location to function properly.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
  
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
        } else {
          console.log('Location permission denied');
        }
      }
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    // Geolocation.getCurrentPosition(info => console.log("Current Position: ", info));
    if (Platform.OS === 'android') {
      checkLocationPermission()
    } else {
      Geolocation.requestAuthorization();
    }
  }, [])

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
      />
      <AppNavigator />
    </SafeAreaProvider>
  );
}


export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});