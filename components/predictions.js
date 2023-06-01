import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import WeatherIconComponent from './weathericon';

//Vector-icons
import { MaterialIcons } from '@expo/vector-icons';

const Item = ({ temp, time }) => (
    <View>
        <Text>{temp}</Text>
        <Text>{time}</Text>
    </View>
);
const renderItem = ({ item }) => (
    <Item title={item.temp} description={item.time} />
);

export default function predictions() {
    return (
        <View style={styles.footer}>
            <View style={[styles.box1, styles.headwrapper]} >
                <Text style={styles.head} >Today</Text>
                <TouchableOpacity style={{ padding: 1 }} onPress={() => {
                    console.log('It works');
                }}>
                    <View style={[styles.box1, styles.box2]}>
                        <Text style={styles.box21} >5 days</Text>
                        <MaterialIcons name="arrow-forward-ios" size={15} color="#fff" style={styles.box22} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.flatlist}>
                <FlatList
                    data={[
                        {
                            id: 1,
                            temp: '23',
                            time: '10:00',
                            icon: 'thunderstorm'
                        },
                        {
                            id: 2,
                            temp: '21',
                            time: '11:00',
                            icon: 'thunderstorm'
                        },
                        {
                            id: 3,
                            temp: '22',
                            time: '12:00',
                            icon: 'drizzle'
                        }, {
                            id: 4,
                            temp: '19',
                            time: '01:00',
                            icon: 'rain'
                        }, {
                            id: 5,
                            temp: '24',
                            time: '02:00',
                            icon: 'cloud'
                        },
                    ]}
                    horizontal
                    renderItem={({ item }) => (
                        <View style={[ styles.predictcontainer ]}>
                            <View style={{ position: 'relative', bottom: 5, height: '100%' }}>
                                <Text style={styles.scrolltemp} >{item.temp}°</Text>
                                <WeatherIconComponent tag={item.icon} style={styles.scrollicon} width={50} height={50} />
                                <Text style={styles.scrolltime}>{item.time}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        height: '20%',
        position: 'absolute',
        bottom: 0,
        flex: 0,
        alignItems: 'center',
    },
    box1: {
        flex: 0,
        flexDirection: 'row',
    },
    headwrapper: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '92%',
    },
    head: {
        color: '#fff',
        fontFamily: 'NotoSans-SemiBold',
        fontSize: 22,
        position: 'absolute',
        left: 0,
    },
    box2: {
        alignItems: 'flex-end',
        opacity: 0.6,
    },
    box21: {
        color: '#fff',
        fontFamily: 'NotoSans-SemiBold',
        fontSize: 15,
    },
    box22: {
        paddingBottom: 3,
        paddingLeft: 3,
    },
    flatlist: {
        paddingHorizontal: 10,
    },
    predictcontainer: {
        height: 100,
        width: 80,
        backgroundColor: "royalblue",
        margin: 10,
        padding: 10,
        borderRadius: 32,
    },
    scrolltemp: {
        color: '#fff',
        fontFamily: 'NotoSans-Bold',
        fontSize: 16,
        alignSelf: 'center'
    },
    scrollicon: {
        alignSelf: 'center',
        position: 'absolute',
        top: 14,
        zIndex: -1,
    },
    scrolltime: {
        color: '#fff',
        opacity: 0.6,
        fontFamily: 'NotoSans-Bold',
        fontSize: 12,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
    },
})