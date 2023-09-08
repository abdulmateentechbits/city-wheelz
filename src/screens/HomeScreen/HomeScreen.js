import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { GoogleMapHome,WhereToGo } from '../../components'
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <GoogleMapHome />
            </View>
            <View style={styles.bottom}>
                <WhereToGo />
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
        flex: 2,
        backgroundColor: '#c1c1c1'
    },
    bottom: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    }
})
