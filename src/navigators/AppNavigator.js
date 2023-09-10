import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DestinationSearchScreen, HomeScreen, SearchResultScreen } from '../screens';
import { AppDrawerNavigator } from './DrawerNavigator';


const Stack = createNativeStackNavigator()



function AppStack() {
    let isAuthenticated = true;
    // @demo remove-block-end
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, navigationBarColor: "#FFFFFF" }}
            initialRouteName={isAuthenticated ? "Root" : "Login"}
        >
            {/* @demo remove-block-start */}
            {isAuthenticated ? (
                <>
                    <Stack.Screen name="Root" component={AppDrawerNavigator} />
                    <Stack.Screen name="Destination" component={DestinationSearchScreen} />
                    <Stack.Screen name="SearchResult" component={SearchResultScreen} />
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={SearchResultScreen} />
                </>
            )}
        </Stack.Navigator>
    )
}


export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}




const styles = StyleSheet.create({})