/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { enableLatestRenderer } from 'react-native-maps';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
enableLatestRenderer();


function CityheelzApp() {
    return <GestureHandlerRootView  style={{ flex: 1 }}><App /></GestureHandlerRootView>;
}

AppRegistry.registerComponent(appName, () => CityheelzApp);
