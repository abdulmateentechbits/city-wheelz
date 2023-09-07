import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { GoogleMapHome } from '../../components/GoogleMapHome/GoogleMapHome'
import { AddressAdd } from '../../components/SelectAddress/AddressAdd'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <GoogleMapHome />
            </View>
            <View style={styles.bottom}>
                <AddressAdd />
            </View>
        </View>
    )
}

export { HomeScreen }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: 1,
        backgroundColor: 'red'
    },
    bottom: {
        flex: 1,
        backgroundColor: "green"
    }
})
