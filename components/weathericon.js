import React, { Component } from 'react';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';

//Svgs and Images
import ClearDay from '../assets/svgs/clearday';
import Cloud from '../assets/svgs/cloud';
import Drizzle from '../assets/svgs/drizzle';
import Rain from '../assets/svgs/rain';
import Thunderstorm from '../assets/svgs/thunderstorm';
import Snow from '../assets/svgs/snow';

class WeatherIconComponent extends Component {
    components = {
        Clear: ClearDay,
        Cloud: Cloud,
        Rain: Rain,
        Snow: Snow,
        Thunderstorm: Thunderstorm,
        Drizzle: Drizzle,
    };
    render(...props) {
        const TagName = this.components[this.props.tag || 'clear'];
        const st = this.props.style;
        // console.log(st);
        return <TagName style={st} width={this.props.width} height={this.props.height} />
    }
}

export default WeatherIconComponent;