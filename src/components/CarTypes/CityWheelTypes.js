import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import types from '../../utils/types';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CityWheelTypes = () => {
  return (
    <View>
      <ScrollView>
        {
          types.map((type, index) => {
            let totalLength = types.length - 1;
            let getImage = () => {
              if (type.type === "UberX") {
                return require("../../assets/images/UberX.jpeg");
              }
              if (type.type === "Comfort") {
                return require("../../assets/images/Comfort.jpeg");
              }
              if (type.type === "UberXL") {
                return require("../../assets/images/UberXL.jpeg");
              }
            }
            return (
              <View key={index.toString()} style={{
                paddingHorizontal: 12,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: index === 0 ? 10 : 30,
                marginBottom: index === totalLength ? 35 : null
              }}>
                <View style={{ backgroundColor: '#FFFFFF', width: 60, height: 60, overflow: 'hidden', borderRadius: 120 }}>
                  <Image source={getImage()} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                </View>
                <View style={{ flex: 1, marginLeft: 9, justifyContent: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 5, fontWeight: "bold" }}>{type.type}</Text>
                    <Ionicons name="person" size={25} />
                    <Text style={{ marginLeft: 5, fontWeight: "bold" }}>{type.person}</Text>
                  </View>
                  <View style={{ marginTop: 5 }}>
                    <Text>{type.duration} pm drop off</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: 120 }}>
                  <Ionicons name="pricetag" size={25} />
                  <Text style={{ marginLeft: 5, fontWeight: "bold" }}>Rs {type.price}</Text>
                  <Text style={{ marginLeft: 5, fontWeight: "bold" }}>est</Text>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
      <TouchableOpacity style={styles.confirmBtn}>
        <Text style={{color:'white', fontWeight:'bold', fontSize:19,letterSpacing:0.5,paddingVertical:5}}>Confirm Uber</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  confirmBtn: {
    position: 'absolute',
    bottom: -10,
    left: 20,
    right: 20,
    minHeight: 40,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',

      
  }
})