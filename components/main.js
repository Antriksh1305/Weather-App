import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import WeatherIconComponent from './weathericon';
import { bannerup, bannerdown } from './styles/stylemain';
import { LinearGradient } from 'expo-linear-gradient';
import { findicon } from './function';

//Vector-icons
import Feather from '@expo/vector-icons/Feather';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//Svgs and Images
import Humidity from '../assets/svgs/humidity';
import Dewpoint from '../assets/svgs/dewpoint';

export default function main(props) {
    function handleicon() {
        return props.handleiconchange(findicon(props.data.currentConditions.icon).icon);
    }
    function handledesc(){
        return props.handledesc(findicon(props.data.currentConditions.icon).desc);
    }
    useEffect(() => {
        handleicon();
        handledesc();
    }, [])
    const styles = props.UI ? bannerdown : bannerup;
   
    return (
        <LinearGradient colors={['#11ACFE', '#139AFB', '#158FF7', '#158AF5', '#1378F3']} locations={[0.0, 0.47, 0.6, 0.75, 1]} style={styles.linearGradient} >
            <View style={[styles.body, styles.container]}>
                <View style={[styles.container, styles.bodywrapper]}>
                    <View style={[styles.container, styles.headerwrapper]}>
                        {/* {!props.UI ? (<MaterialIcons name="keyboard-arrow-left" size={24} color="white" style={styles.backbtn} />) : null} */}
                        {!props.UI ? (<TouchableOpacity style={styles.backbtn} onPress={() => {
                            props.handleUIchange(!props.UI);
                        }}>
                            <Ionicons name="md-arrow-back-circle-outline" size={30} color="white" />
                        </TouchableOpacity>
                        ) : null}
                        <Feather name={props.UI ? 'map-pin' : 'calendar'} size={24} style={styles.headicon} />
                        <Text style={[styles.commontxt, styles.location]}>{props.UI ? props.data.address : '7 days'}</Text>
                    </View>
                    <WeatherIconComponent tag={props.icon} style={styles.weathersvgstyle} width={props.UI ? '100%' : '50%'} height={props.UI ? '58%' : '100%'} />
                    <View style={[styles.container, styles.detailswrapper]}>
                        <View style={styles.temperature}>
                            <Text style={[styles.commontxt, styles.temptext]}>{Math.round(props.data.days[0].hours[new Date().getHours()].temp)}</Text>
                            <Text style={[styles.commontxt, styles.degreesymbol]}>°</Text>
                        </View>
                        <View style={styles.details}>
                            {!props.UI ? (<View style={styles.today}><Text style={[styles.commontxt, { fontSize: 24, fontFamily: 'NotoSans-Medium' }]}>Today</Text></View>) : null}
                            <Text style={[styles.commontxt, styles.detailsbox1]}>{props.desc}</Text>
                            {props.UI ? (<Text style={[styles.commontxt]}>{props.arr[0]}, {props.arr[2]} {props.arr[1]}</Text>) : null}
                        </View>
                    </View>
                </View>
                <View style={[styles.container, styles.contentwrapper]}>
                    <View style={styles.content}>
                        <View style={styles.container}>
                            <Feather name='wind' size={24} style={{ color: '#fff' }} />
                            <Text style={styles.commontxt}>{Math.round(props.data.currentConditions.windspeed)} km/h</Text>
                            <Text style={styles.contenttxt}>Wind</Text>
                        </View>
                        <View style={styles.container}>
                            <Humidity style={{ width: 24, height: 24 }} />
                            <Text style={styles.commontxt}>{props.data.currentConditions.humidity.toString().substring(0, 4)} %</Text>
                            <Text style={styles.contenttxt}>Humidity</Text>
                        </View>
                        <View style={styles.container}>
                            <Dewpoint />
                            <Text style={styles.commontxt}>{props.data.currentConditions.dew} °C</Text>
                            <Text style={styles.contenttxt}>Dew Point</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.shadow} />
        </LinearGradient>
    );
}