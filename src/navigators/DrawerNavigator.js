import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import { CustomDrawerContent } from '../components';
import { HomeScreen } from '../screens';

const Drawer = createDrawerNavigator();

const OtherScreens = (props) => {

    return (
        <View>
            <Text>{props.route.name}</Text>
        </View>
    )
}


export const AppDrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitle: ""
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Your Trips" component={OtherScreens} />
            <Drawer.Screen name="Wallet" component={OtherScreens} />
            <Drawer.Screen name="Help" component={OtherScreens} />
            <Drawer.Screen name="Settings" component={OtherScreens} />

        </Drawer.Navigator>
    );
};

