import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

//Components
import Main from './main';
import Predictions from './predictions';
import { findday, findicon } from './function';
import { font } from './font';

//For Custom Fonts
import Lottie from 'lottie-react-native';

export default function index(props) {
      //States
      const [UI, setUI] = useState(true);
      const [icon, seticon] = useState('Clear');
      const [desc, setdesc] = useState('');
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [address, setAddress] = useState('');

      useEffect(() => {
            const reverseGeocode = async () => {
                  const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
                        longitude: props.location.coords.longitude,
                        latitude: props.location.coords.latitude,
                  });
                  let add = `${props.location.coords.latitude},${props.location.coords.latitude, props.location.coords.longitude}`;
                  setAddress(reverseGeocodedAddress[0].city);
                  const fetchData = async () => {
                        const resp = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${add}?unitGroup=metric&include=current%2Chours%2Cdays&key=MFJ2G3Q9DWTJZXA6ZJPR5589J&contentType=json`);
                        const data = await resp.json();
                        setData(data);
                        setLoading(false);
                  };
                  fetchData();
            };
            reverseGeocode();
      }, []);

      //Fonts
      font();

      if (data == '') {
            return (
                  <SafeAreaView style={styles.loader}>
                        <Lottie source={require('../assets/animation/animation.json')} autoPlay loop />
                  </SafeAreaView>
            );
      }
      else {
            return (
                  <SafeAreaView style={styles.container}>
                        <Main UI={UI} handleUIchange={setUI} address={address} icon={icon} desc={desc} handleiconchange={seticon} handledesc={setdesc} data={data} arr={findday()} />
                        <Predictions UI={UI} handleUIchange={setUI} icon={icon} data={data} />
                  </SafeAreaView>
            );
      }
}

const styles = StyleSheet.create({
      loader: {
            flex: 1,
            backgroundColor: '#080c1c',
      },
      container: {
            flex: 1,
            backgroundColor: '#080c1c',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
      },
});
