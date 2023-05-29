import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//Vector-icons
import Octicons from '@expo/vector-icons/Octicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

//Svgs and Images
import { SvgUri } from 'react-native-svg';
import ClearDay from '../assets/images/clearday';
import Cloud from '../assets/images/cloud';
import Drizzle from '../assets/images/drizzle';
import Rain from '../assets/images/rain';
import Thunderstorm from '../assets/images/thunderstorm';
import Snow from '../assets/images/snow';

// import { Image } from 'expo-image';

export default function main() {
    const [fontsLoaded] = useFonts({
        'NotoSans-Regular': require("../assets/fonts/NotoSans-Regular.ttf"),
        'NotoSans-Medium': require("../assets/fonts/NotoSans-Medium.ttf"),
        'NotoSans-SemiBold': require("../assets/fonts/NotoSans-SemiBold.ttf"),
        'NotoSans-Bold': require("../assets/fonts/NotoSans-Bold.ttf"),
        'NotoSans-ExtraBold': require("../assets/fonts/NotoSans-ExtraBold.ttf"),
        'Penta-Bold': require("../assets/fonts/Penta-Rounded-Bold.ttf"),
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
        <LinearGradient colors={['#11ACFE', '#139AFB', '#158FF7', '#158AF5', '#1378F3']} locations={[0.0, 0.47, 0.6, 0.75, 1]} style={styles.linearGradient} >
            <View style={[styles.body, styles.container]}>
                <View style={[styles.container, styles.bodywrapper]}>
                    <View style={[styles.container, styles.headerwrapper]}>
                        <Feather name='map-pin' size={24} style={{ color: 'white', paddingRight: 8, paddingBottom: 4 }} />
                        {/* <Octicons name='location' size={24} style={{color: 'white',paddingRight: 10}} /> */}
                        <Text style={[styles.commontxt, styles.location]}>Pratapgarh</Text>
                    </View>
                    <ClearDay style={styles.weathersvgstyle} />
                    <View style={[styles.container, styles.detailswrapper]}>
                        <View style={[styles.container, styles.temperature]}>
                            <Text style={[styles.commontxt, { fontFamily: 'NotoSans-Bold' }, styles.temptext]}>11</Text>
                            <Text style={[styles.commontxt, { fontFamily: 'NotoSans-Bold' }, styles.degreesymbol]}>°</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={[styles.commontxt, { fontFamily: 'NotoSans-Regular', fontSize: 26 }]}>Clear Sky</Text>
                            <Text style={[styles.commontxt, { fontFamily: 'NotoSans-Regular' }]}>Monday, 29 May</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.container, styles.contentwrapper]}>
                    <View style={styles.content}>
                        <View style={styles.container}>
                            <Feather name='wind' size={16} style={{ color: '#fff' }} />
                            {/* <Text></Text> */}
                            <Text style={styles.commontxt}>Wind Speed</Text>
                        </View>
                        <View style={styles.container}>
                            {/* icon */}
                            {/* <Text></Text> */}
                            <Text style={styles.commontxt}>Humidity</Text>
                        </View>
                        <View style={styles.container}>
                            {/* icon */}
                            {/* <Text></Text> */}
                            <Text style={styles.commontxt}>Anything</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.shadow} />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: '79%',
        width: '100%',
        marginHorizontal: 10,
        position: 'absolute',
        top: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 68,
        borderBottomLeftRadius: 68,
    },
    shadow: {
        backgroundColor: '#053882',
        zIndex: -1,
        position: 'absolute',
        height: '100%',
        width: '93%',
        top: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
    },
    body: {
        marginTop: 30,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    commontxt: {
        color: 'white',
    },
    bodywrapper: {
        flex: 0.8,
    },
    headerwrapper: {
        flex: 0.13,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingRight: 20,
    },
    location: {
        fontFamily: 'NotoSans-SemiBold',
        fontSize: 27,
    },
    weathersvgstyle: {
        width: '100%',
        height: '50%',
        position: 'absolute',
        top: 60,
        zIndex: -1,
    },
    detailswrapper: {
        flex: 0.87,
        justifyContent: 'flex-end'
    },
    temperature: {
        flex: 0.6,
        flexDirection: 'row',
        paddingLeft: 20
    },
    temptext: {
        fontSize: 160
    },
    degreesymbol: {
        fontSize: 50
    },
    details: {
        alignItems: 'center'
    },
    contentwrapper: {
        flex: 0.2,
        justifyContent: 'space-around',
    },
    divider: {
        flex: 0.5,
    },
    content: {
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        // backgroundColor: 'red',
        borderTopWidth: 2,
        borderStyle: 'solid',
        borderColor: 'rgba(255,255,255,0.3)',

    },
});