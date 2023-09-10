import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export const WhereToGo = () => {
  const { navigate } = useNavigation();
  const gotToNextScreen = () => {
    navigate("Destination");
  }
  return (
    <View>
      <View style={styles.separator} />
      <Pressable style={styles.container} onPress={gotToNextScreen}>
        <Text style={styles.title}>Where to?</Text>
        <View style={styles.dropdownContainer}>
          <AntDesign name="clockcircle" color="#000000" style={styles.icon} />
          <Text style={styles.dropdownText}>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" color="#000000" style={styles.icon} />
        </View>
      </Pressable>
      <View style={[styles.container, { justifyContent: 'flex-start', columnGap: 5, paddingVertical: 10, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: "#e1e1e1" }]}>
        <MaterialCommunityIcons name="office-building" color="#000000" style={[styles.icon, { fontSize: 30 }]} />
        <Text>Office</Text>
      </View>
      <View style={[styles.container, { justifyContent: 'flex-start', columnGap: 5, paddingVertical: 10, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: "#e1e1e1" }]}>
        <MaterialIcons name="home-filled" color="#000000" style={[styles.icon, { fontSize: 30 }]} />
        <Text>Home</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    width: 79,
    height: 5,
    backgroundColor: '#000000',
    marginTop: 5,
    alignSelf: 'center',
  },
  container: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    backgroundColor: '#c1c1c1',
    borderRadius: 3,
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 19,
    backgroundColor: '#FFFFFF',
  },
  dropdownText: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  icon: {
    fontSize: 16,
    marginRight: 5,
    color: '#000000',
  },
});
