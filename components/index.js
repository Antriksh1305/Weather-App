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
      const [anim, setanim] = useState(true);
      const [UI, setUI] = useState(true);
      const [icon, seticon] = useState('Clear');
      const [desc, setdesc] = useState('');
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      
      //API Fetch
      const fetchData = async () => {
            const resp = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Meghalaya?unitGroup=metric&include=current%2Chours%2Cdays&key=V4NWW9BW4QAPUGQPNU48HWNT8&contentType=json");
            const data = await resp.json();
            setData(data);
            setLoading(false);
            datarec = data;
            console.log('hit');
      };
      
      useEffect(() => {
            fetchData();
      }, []);
      
      //Fonts
      font();

      //Loading Page and Main Page 
      // setTimeout(() => {
      //       setanim(false);
      // }, 3000);

      // if (anim) {
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
            // handleicon();
            return (
                  <SafeAreaView style={styles.container}>
                        {data && <Main UI={UI} handleUIchange={setUI} icon={icon} desc={desc} handleiconchange={seticon} handledesc={setdesc} data={data} arr={findday()} />}
                        {data && <Predictions UI={UI} handleUIchange={setUI} icon={icon} />}
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
