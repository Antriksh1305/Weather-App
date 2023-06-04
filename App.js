import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

//Components
import Main from './components/main';
import Predictions from './components/predictions';

//For Custom Fonts
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Lottie from 'lottie-react-native';

export default function App(props) {
  const [anim, setanim] = useState(true);
  const [UI, setUI] = useState(true);

  const [fontsLoaded] = useFonts({
    'NotoSans-Regular': require("./assets/fonts/NotoSans-Regular.ttf"),
    'NotoSans-Medium': require("./assets/fonts/NotoSans-Medium.ttf"),
    'NotoSans-SemiBold': require("./assets/fonts/NotoSans-SemiBold.ttf"),
    'NotoSans-Bold': require("./assets/fonts/NotoSans-Bold.ttf"),
    'NotoSans-ExtraBold': require("./assets/fonts/NotoSans-ExtraBold.ttf"),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, [])
  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  setTimeout(() => { setanim(false) }, 3000);
  if (anim) {
    return (
      <SafeAreaView style={styles.loader}>
        <Lottie source={require('./assets/animation/animation.json')} autoPlay loop />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Main UI={UI} handleUIchange={setUI} />
        <Predictions UI={UI} handleUIchange={setUI} />
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