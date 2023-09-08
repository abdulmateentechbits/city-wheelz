import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import { HomeScreen, DestinationSearchScreen, SearchResultScreen } from './src/screens';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigators/AppNavigator';


function App(): JSX.Element {

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


export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});