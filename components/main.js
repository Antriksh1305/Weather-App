import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import WeatherIconComponent from './weathericon';
import { bannerup, bannerdown } from './styles/stylemain';
import { LinearGradient } from 'expo-linear-gradient';

//Vector-icons
import Feather from '@expo/vector-icons/Feather';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//Svgs and Images
import { SvgUri } from 'react-native-svg';
import Humidity from '../assets/svgs/humidity';
import Dewpoint from '../assets/svgs/dewpoint';

export default function main({ UI, handleUIchange }) {
    const [icon, seticon] = useState('Clear');
    function changeicon() {
        seticon('Cloud');
    }
    const styles = UI ? bannerdown : bannerup;
    const heading = UI ? 'Pratapgarh' : '7 days';
    return (
        <LinearGradient colors={['#11ACFE', '#139AFB', '#158FF7', '#158AF5', '#1378F3']} locations={[0.0, 0.47, 0.6, 0.75, 1]} style={styles.linearGradient} >
            <View style={[styles.body, styles.container]}>
                <View style={[styles.container, styles.bodywrapper]}>
                    <View style={[styles.container, styles.headerwrapper]}>
                        {/* {!UI ? (<MaterialIcons name="keyboard-arrow-left" size={24} color="white" style={styles.backbtn} />) : null} */}
                        {!UI ? (<TouchableOpacity style={styles.backbtn} onPress={() => {
                            handleUIchange(!UI);
                            console.log('handlingUIchange');
                        }}>
                            <Ionicons name="md-arrow-back-circle-outline" size={30} color="white" />
                        </TouchableOpacity>
                        ) : null}
                        <Feather name={UI ? 'map-pin' : 'calendar'} size={24} style={styles.headicon} />
                        <Text style={[styles.commontxt, styles.location]}>{heading}</Text>
                    </View>
                    <WeatherIconComponent tag={icon} style={styles.weathersvgstyle} width={UI ? '100%' : '50%'} height={UI ? '58%' : '100%'} />
                    <View style={[styles.container, styles.detailswrapper]}>
                        <View style={styles.temperature}>
                            <Text style={[styles.commontxt, styles.temptext]}>21</Text>
                            <Text style={[styles.commontxt, styles.degreesymbol]}>°</Text>
                        </View>
                        <View style={styles.details}>
                            {!UI ? (<View style={styles.today}><Text style={[styles.commontxt, { fontSize: 24, fontFamily: 'NotoSans-Medium' }]} >Today</Text></View>) : null}
                            <Text style={[styles.commontxt, styles.detailsbox1]}>Sunny Day</Text>
                            {UI ? (<Text style={[styles.commontxt]}>Monday, 29 May</Text>) : null}
                        </View>
                    </View>
                </View>
                <View style={[styles.container, styles.contentwrapper]}>
                    <View style={styles.content}>
                        <View style={styles.container}>
                            <Feather name='wind' size={24} style={{ color: '#fff' }} />
                            <Text style={styles.commontxt}>13 km/h</Text>
                            <Text style={styles.contenttxt}>Wind</Text>
                        </View>
                        <View style={styles.container}>
                            <Humidity style={{ width: 24, height: 24 }} />
                            <Text style={styles.commontxt}>24%</Text>
                            <Text style={styles.contenttxt}>Humidity</Text>
                        </View>
                        <View style={styles.container}>
                            <Dewpoint />
                            <Text style={styles.commontxt}>15.5 °C</Text>
                            <Text style={styles.contenttxt}>Dew Point</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.shadow} />
        </LinearGradient>
    );
}