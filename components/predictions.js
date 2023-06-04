import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import WeatherIconComponent from './weathericon';
import { bannerup, bannerdown } from './styles/stylepredictions';

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

export default function predictions({ UI, handleUIchange }) {
    const styles = UI ? bannerdown : bannerup;
    const [layout, setLayout] = useState({
        width: 0,
        height: 0,
    });
    return (
        <View style={styles.footer}>
            {UI ? (
                <View style={[styles.box1, styles.headwrapper]} >
                    <Text style={styles.head} >Today</Text>
                    <TouchableOpacity style={{ padding: 1 }} onPress={(e) => {
                        // console.log(e._dispatchInstances.memoizedProps.children[0].props.children[0]);
                        handleUIchange(!UI);
                    }}>
                        <View style={[styles.box1, styles.box2]}>
                            <Text style={styles.box21} >5 days</Text>
                            <MaterialIcons name="arrow-forward-ios" size={15} color="#fff" style={styles.box22} />
                        </View>
                    </TouchableOpacity>
                </View>
            ) : null}
            <View style={styles.flatlist}>
                <FlatList
                    data={[
                        {
                            id: 1,
                            temp: '23',
                            time: '10:00',
                            icon: 'Clear',
                            day: 'Mon',
                        }, {
                            id: 2,
                            temp: '21',
                            time: '11:00',
                            icon: 'Thunderstorm',
                            day: 'Tue',
                        }, {
                            id: 3,
                            temp: '22',
                            time: '12:00',
                            icon: 'Drizzle',
                            day: 'Wed',
                        }, {
                            id: 4,
                            temp: '19',
                            time: '01:00',
                            icon: 'Rain',
                            day: 'Thu',
                        }, {
                            id: 5,
                            temp: '24',
                            time: '02:00',
                            icon: 'Cloud',
                            day: 'Fri',
                        }, {
                            id: 6,
                            temp: '20',
                            time: '03:00',
                            icon: 'Snow',
                            day: 'Sat',
                        }, {
                            id: 7,
                            temp: '23',
                            time: '04:00',
                            icon: 'Clear',
                            day: 'Sun',
                        },
                    ]}
                    horizontal={UI}
                    renderItem={({ item }) => (
                        <View key={item.id} style={[styles.predictcontainer]}>
                            <TouchableOpacity style={styles.datadetails}>
                                <View style={[styles.week, styles.scrolltemp]}>
                                    <Text style={styles.commontxt}> {UI ? item.temp + '°' : item.day}</Text>
                                </View>
                                <View style={[styles.week, styles.scrollicon]}>
                                    <WeatherIconComponent tag={item.icon} width={50} height={50} />
                                    {!UI ? (<Text style={styles.commontxt}>{item.icon}</Text>) : null}
                                </View>
                                <View style={[styles.week, styles.scrolltime]}>
                                    <Text style={styles.commontxt}>{UI ? item.time : item.temp + '°'}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

/*

                        */

