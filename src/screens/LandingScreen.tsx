import React, {useState, useReducer, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

const screenWidth = Dimensions.get('screen').width;

const LandingScreen = () => {
  //   const [errorMsg, setErrorMsg] = useState('');
  //const [address, setAddress] = useState();

  const [displayAddress, setDieplayAddress] = useState(0);
  const [position, setPosition] = useState<GeolocationResponse['coords']>({
    latitude: 0,
    longitude: 0,
    accuracy: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    heading: 0,
    speed: 0,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => setPosition(position.coords),
      //   err => alert(err.message),
      //   {enableHighAccuracy: true, timeout: 10000},
    );
    setDieplayAddress(position.latitude);
    console.log(position);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navigation} />

      <View style={styles.body}>
        <Image
          source={require('../images/Exploring.png')}
          style={styles.deliveryIcon}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Your Delivery Address</Text>
        </View>
        <Text style={styles.addressText}>{displayAddress}</Text>
      </View>
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(242,242,242,1)',
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryIcon: {
    width: 120,
    height: 120,
  },
  addressContainer: {
    width: screenWidth - 100,
    borderBottomColor: 'red',
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  addressTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#7D7D7D',
  },
  addressText: {
    fontSize: 20,
    fontWeight: '200',
    color: '#4F4F4F',
  },

  footer: {
    flex: 1,
  },
});

export default LandingScreen;
function alert(message: string): void {
  throw new Error('Function not implemented.');
}
