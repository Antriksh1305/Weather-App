import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Index from './components/index';
import Lottie from 'lottie-react-native';
import * as Location from 'expo-location';

export default function App() {
    const [location, setLocation] = useState();

    Location.setGoogleApiKey("AIzaSyD5GUOMMrDY5Ml8JOQ5j7z7p9f8GaGCDBg");

    useEffect(() => {
        const getPermissions = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log("Please grant location permissions");
                return;
            }

            console.log('reach');
            const currentLocation = await Location.getCurrentPositionAsync({});
            console.log(status);
            setLocation(currentLocation);
            console.log("Location:");
            console.log(currentLocation);
        };
        while (location == undefined) {
            var timer = setTimeout(() => {
                if (location == undefined) {
                    console.log('TIMER');
                    getPermissions();
                }
            }, 2000);
            return () => clearInterval(timer);
        }
    }, []);

    if (location == undefined) console.log('no location');
    if (location != undefined) return <Index location={location} />;
    else {
        return (
            <SafeAreaView style={styles.loader}>
                <Lottie source={require('./assets/animation/animation.json')} autoPlay loop />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        backgroundColor: '#080c1c',
    }
});