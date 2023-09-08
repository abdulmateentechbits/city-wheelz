import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SearchResultScreen } from '../screens';


const Stack = createNativeStackNavigator()



function AppStack() {
    let isAuthenticated = true;
    // @demo remove-block-end
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, navigationBarColor: "#FFFFFF" }}
            initialRouteName={isAuthenticated ? "Home" : "Login"} // @demo remove-current-line
        >
            {/* @demo remove-block-start */}
            {isAuthenticated ? (
                <>
                    {/* @demo remove-block-end */}
                    <Stack.Screen name="Home" component={HomeScreen} />
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