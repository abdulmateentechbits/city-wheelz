import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { Linking, Pressable, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

export function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>

            <View style={{ backgroundColor: 'black', paddingLeft: 12, paddingVertical: 12 }}>

                <View style={{paddingVertical:15, flexDirection:'row', alignItems:'center'}}>
                    <View style={{width:60,height:60,borderWidth:1,borderRadius:120,backgroundColor:'#cacaca'}}></View>
                    <View style={{marginLeft:15}}>
                        <Text style={{color:'white'}}>Abdul mateen</Text>
                        <Text style={{color:'white', marginTop:8}}>5.00 *</Text>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTopColor: '#eeeeee',
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderBottomColor: '#eeeeee',
                    paddingVertical: 10,
                }}>
                    <View>
                        <Text style={{ color: 'white' }}>Message</Text>
                    </View>
                    <AntDesign name="caretdown" size={20} color="white" style={{ marginRight: 10 }} />
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#cacaca' }}>Do more with your account</Text>
                </View>
                <Pressable onPress={() => console.log("Make money driving..")} style={{ marginTop: 10 }}>
                    <Text style={{ color: 'white' }}>Make money driving</Text>
                </Pressable>

            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}