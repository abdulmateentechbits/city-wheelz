import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {HomeScreen,DestinationSearchScreen, SearchResultScreen} from './src/screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App(): JSX.Element {

  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
      />
      <SearchResultScreen />
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