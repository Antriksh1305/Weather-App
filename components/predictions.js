import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import WeatherIconComponent from './weathericon';
import { findicon } from './function';

import { bannerup, bannerdown } from './styles/stylepredictions';

//Vector-icons
import { MaterialIcons } from '@expo/vector-icons';

export default function predictions(props) {
    const styles = props.UI ? bannerdown : bannerup;
    
    function weekdays(){
        let d = new Date().getDay();
        d++;
        const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        while (d--) week.push(week.shift());
        return [week,new Date().getHours()];
    }
    
    function currenttime(i,j){
        let time,temp,newtemp;
        if ((weekdays()[1] + i) <= 23){
            time = props.data.days[0].hours[i + new Date().getHours()].datetime;
        }
        else {
            time = props.data.days[1].hours[j].datetime;
        }
        temp = time.toString().substring(0,2);
        temp > 12 ? newtemp = temp - 12 : newtemp = temp;
        if(newtemp <= '9' && temp[0]!='0') newtemp = '0' + newtemp.toString();
        return time.replace(temp, newtemp).substring(0, 5);
    }

    function houricon(i,j){
        let ico = (weekdays()[1] + i) <= 23 ? (props.data.days[0].hours[i + new Date().getHours()].icon) : (props.data.days[1].hours[j].icon);
        return findicon(ico).icon;
    }
    
    let i = 0,j = 0,k = 0;
    return (
        <View style={styles.footer}>
            {props.UI ? (
                <View style={[styles.box1, styles.headwrapper]} >
                    <Text style={styles.head} >Today</Text>
                    <TouchableOpacity style={{ padding: 1 }} onPress={(e) => {
                        props.handleUIchange(!props.UI);
                    }}>
                        <View style={[styles.box1, styles.box2]}>
                            <Text style={styles.box21}>7 days</Text>
                            <MaterialIcons name="arrow-forward-ios" size={15} color="#fff" style={styles.box22} />
                        </View>
                    </TouchableOpacity>
                </View>
            ) : null}
            <View style={styles.flatlist}>
                <FlatList
                    data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 },{ id: 8}, {id: 9}, {id: 10}, {id: 11}, {id: 12}]}
                    horizontal={props.UI}
                    renderItem={({item}) => (
                        <View style={item.id < 8 || props.UI? styles.predictcontainer : {display: 'none'}}>
                            <TouchableOpacity style={styles.datadetails}>
                                <View style={[styles.week, styles.scrolltemp]}>
                                    <Text style={styles.commontxt}> {props.UI ? (weekdays()[1] + item.id <= 23? Math.round(props.data.days[0].hours[ weekdays()[1] + item.id ].temp) : Math.round(props.data.days[1].hours[i++].temp)) + '°' : weekdays()[0][item.id-1]}</Text>
                                </View>
                                <View style={[styles.week, styles.scrollicon]}>
                                    <WeatherIconComponent tag={props.UI ? (weekdays()[1] + item.id <= 23 ? houricon(item.id, k): houricon(item.id,k++)) : findicon(props.data.days[item.id].icon).icon} width={50} height={50} />
                                    {(!props.UI)? (<Text style={styles.commontxt}>{props.data.days[item.id].conditions}</Text>) : null}
                                </View>
                                <View style={[styles.week, styles.scrolltime]}>
                                    <Text style={styles.commontxt}>{props.UI ? (weekdays()[1] + item.id <= 23 ? currenttime(item.id,j): currenttime(item.id,j++)) : Math.round(props.data.days[item.id].temp) + '°'}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}