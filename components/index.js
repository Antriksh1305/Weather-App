import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

//Components
import Main from './main';
import Predictions from './predictions';
import { findday, findicon } from './function';
import { font } from './font';

//For Custom Fonts
import Lottie from 'lottie-react-native';

export default function index() {
      //States
      const [UI, setUI] = useState(true);
      const [icon, seticon] = useState('Clear');
      const [desc, setdesc] = useState('');
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      
      //API Fetch
      const fetchData = async () => {
            const resp = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Pratapgarh?unitGroup=metric&include=current%2Chours%2Cdays&key=MFJ2G3Q9DWTJZXA6ZJPR5589J&contentType=json");
            const data = await resp.json();
            setData(data);
            setLoading(false);
      };
      
      useEffect(() => {
            fetchData();
      }, []);
      
      //Fonts
      font();

      if(data == ''){ 
            fetchData();
            console.log('no data on loading section');
            return (
                  <SafeAreaView style={styles.loader}>
                        <Lottie source={require('../assets/animation/animation.json')} autoPlay loop />
                  </SafeAreaView>
            );
      }
      else {
            return (
                  <SafeAreaView style={styles.container}>
                        <Main UI={UI} handleUIchange={setUI} icon={icon} desc={desc} handleiconchange={seticon} handledesc={setdesc} data={data} arr={findday()} />
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
