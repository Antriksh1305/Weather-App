import * as React from "react"
import Svg, { LinearGradient, Stop, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 64 64"
            xmlSpace="preserve"
            enableBackground="new 0 0 64 64"
            {...props}
        >
            <LinearGradient
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1={22.9022}
                y1={21.6532}
                x2={26.0532}
                y2={16.1872}
                gradientTransform="scale(1 -1) rotate(-23.74 -132.93 -12.978)"
            >
                <Stop offset={0} stopColor="#4286ee" />
                <Stop offset={0.45} stopColor="#4286ee" />
                <Stop offset={1} stopColor="#0950bc" />
            </LinearGradient>
            <Path
                d="M25.4 44.9L22.6 49.4"
                fill="none"
                stroke="url(#SVGID_1_)"
                strokeWidth={2.0767}
                strokeLinecap="round"
                strokeMiterlimit={10}
            />
            <LinearGradient
                id="SVGID_00000091723515688828834910000018250227301621510323_"
                gradientUnits="userSpaceOnUse"
                x1={29.9021}
                y1={21.6535}
                x2={33.053}
                y2={16.1876}
                gradientTransform="scale(1 -1) rotate(-23.74 -125.138 -15.373)"
            >
                <Stop offset={0} stopColor="#4286ee" />
                <Stop offset={0.45} stopColor="#4286ee" />
                <Stop offset={1} stopColor="#0950bc" />
            </LinearGradient>
            <Path
                d="M33.4 44.8L30.7 49.3"
                fill="none"
                stroke="url(#SVGID_00000091723515688828834910000018250227301621510323_)"
                strokeWidth={2.0767}
                strokeLinecap="round"
                strokeMiterlimit={10}
            />
            <LinearGradient
                id="SVGID_00000124126683644266988090000012339694916679833531_"
                gradientUnits="userSpaceOnUse"
                x1={36.9021}
                y1={21.6535}
                x2={40.053}
                y2={16.1876}
                gradientTransform="scale(1 -1) rotate(-23.74 -118.137 -15.373)"
            >
                <Stop offset={0} stopColor="#4286ee" />
                <Stop offset={0.45} stopColor="#4286ee" />
                <Stop offset={1} stopColor="#0950bc" />
            </LinearGradient>
            <Path
                d="M40.4 44.8L37.7 49.3"
                fill="none"
                stroke="url(#SVGID_00000124126683644266988090000012339694916679833531_)"
                strokeWidth={2.0767}
                strokeLinecap="round"
                strokeMiterlimit={10}
            />
            <LinearGradient
                id="SVGID_00000002386362932908053840000005800727913076468406_"
                gradientUnits="userSpaceOnUse"
                x1={22.5865}
                y1={44.0348}
                x2={39.2154}
                y2={15.214}
                gradientTransform="matrix(1 0 0 -1 0 66)"
            >
                <Stop offset={0} stopColor="#f3f7fe" />
                <Stop offset={0.45} stopColor="#f3f7fe" />
                <Stop offset={1} stopColor="#deeafb" />
            </LinearGradient>
            <Path
                d="M46.5 31.5h-.3c1.4-5.6-2.1-11.3-7.7-12.7-4.4-1.1-9 .8-11.4 4.7-3.3-2-7.6-.9-9.6 2.5-.6 1.1-1 2.3-1 3.5 0 .4 0 .8.1 1.1-4.1.8-6.7 4.7-5.9 8.8.7 3.5 3.7 6 7.3 6.1h28.5c3.9 0 7-3.1 7-7s-3.1-7-7-7z"
                fill="url(#SVGID_00000002386362932908053840000005800727913076468406_)"
                stroke="#e6effc"
                strokeWidth={0.5}
                strokeMiterlimit={10}
            />
        </Svg>
    )
}

export default SvgComponent