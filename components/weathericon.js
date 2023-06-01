import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

//Svgs and Images
import ClearDay from '../assets/images/clearday';
import Cloud from '../assets/images/cloud';
import Drizzle from '../assets/images/drizzle';
import Rain from '../assets/images/rain';
import Thunderstorm from '../assets/images/thunderstorm';
import Snow from '../assets/images/snow';

class WeatherIconComponent extends Component {
    components = {
        clear: ClearDay,
        cloud: Cloud,
        rain: Rain,
        snow: Snow,
        thunderstorm: Thunderstorm,
        drizzle: Drizzle,
    };
    render(...props) {
        const TagName = this.components[this.props.tag || 'clear'];
        const st = this.props.style;
        console.log(st);
        return <TagName style={st} width={this.props.width} height={this.props.height} />
    }
}

export default WeatherIconComponent;