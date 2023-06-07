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
            else {
                let s = await Location.requestBackgroundPermissionsAsync();
            }
            console.log(status);
            function getCurrentLocation() {
                const timeout = 10000;
                return new Promise(async (resolve, reject) => {
                    setTimeout(() => { reject(new Error(`Error getting gps location after ${(timeout * 2) / 1000} s`)) }, timeout * 2);
                    setTimeout(async () => { resolve(await Location.getLastKnownPositionAsync()) }, timeout);
                    resolve(await Location.getCurrentPositionAsync());
                });
            }
            const currentLocation =  await getCurrentLocation();
                setLocation(currentLocation);
                console.log("Location:");
                console.log(currentLocation);
        };
        getPermissions();
    }, []);

    if (location == undefined) console.log('no location');
    if (location != undefined) return <Index location={location} />;
    else {
        console.log('here 1');
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