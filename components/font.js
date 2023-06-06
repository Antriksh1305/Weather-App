import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

function font(){
      const [fontsLoaded] = useFonts({
            'NotoSans-Regular': require('../assets/fonts/NotoSans-Regular.ttf'),
            'NotoSans-Medium': require('../assets/fonts/NotoSans-Medium.ttf'),
            'NotoSans-SemiBold': require('../assets/fonts/NotoSans-SemiBold.ttf'),
            'NotoSans-Bold': require('../assets/fonts/NotoSans-Bold.ttf'),
            'NotoSans-ExtraBold': require('../assets/fonts/NotoSans-ExtraBold.ttf'),
      });
      useEffect(() => {
            async function prepare() {
                  await SplashScreen.preventAutoHideAsync();
            }
            prepare();
      }, []);

      if (!fontsLoaded) {
            return undefined;
      } else {
            SplashScreen.hideAsync();
      }
}

export { font };