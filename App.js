import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

//Components
import Main from './components/main';
import Predictions from './components/predictions';

//For Custom Fonts
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
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

  return (
    <SafeAreaView style={styles.container}>
      <Main />
      <Predictions />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080c1c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
