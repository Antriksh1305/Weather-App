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
                x1={36.3121}
                y1={27.3472}
                x2={43.6165}
                y2={14.6819}
                gradientTransform="matrix(.7702 .3924 .4741 -.9305 -1.036 52.07)"
            >
                <Stop offset={0} stopColor="#f7b23b" />
                <Stop offset={0.45} stopColor="#f7b23b" />
                <Stop offset={1} stopColor="#f59e0b" />
            </LinearGradient>
            <Path
                d="M42.6 40.5L35.5 48.3 38 49.5 33 56.4 44.6 49.1 40.8 47.2 46.4 42.4z"
                fill="url(#SVGID_1_)"
                stroke="#f6a823"
                strokeWidth={0.3846}
                strokeMiterlimit={10}
            />
            <LinearGradient
                id="SVGID_00000047749358113166142320000004942345828277558935_"
                gradientUnits="userSpaceOnUse"
                x1={20.8626}
                y1={21.3204}
                x2={28.1671}
                y2={8.6551}
                gradientTransform="matrix(.7702 .3924 .4741 -.9305 -1.036 52.07)"
            >
                <Stop offset={0} stopColor="#f7b23b" />
                <Stop offset={0.45} stopColor="#f7b23b" />
                <Stop offset={1} stopColor="#f59e0b" />
            </LinearGradient>
            <Path
                d="M27.9 40L20.8 47.8 23.3 49.1 18.2 56 29.8 48.6 26.1 46.7 31.6 41.9z"
                fill="url(#SVGID_00000047749358113166142320000004942345828277558935_)"
                stroke="#f6a823"
                strokeWidth={0.3846}
                strokeMiterlimit={10}
            />
            <LinearGradient
                id="SVGID_00000050652894193089875010000018243551854575901358_"
                gradientUnits="userSpaceOnUse"
                x1={22.5865}
                y1={43.2564}
                x2={39.2154}
                y2={14.4356}
                gradientTransform="matrix(1 0 0 -1 0 66)"
            >
                <Stop offset={0} stopColor="#f3f7fe" />
                <Stop offset={0.45} stopColor="#f3f7fe" />
                <Stop offset={1} stopColor="#deeafb" />
            </LinearGradient>
            <Path
                d="M46.5 32.3h-.3c1.4-5.6-2.1-11.3-7.7-12.7-4.4-1.1-9 .8-11.4 4.7-3.3-2-7.6-.9-9.6 2.5-.6 1.1-1 2.3-1 3.5 0 .4 0 .8.1 1.1-4.1.8-6.7 4.7-5.9 8.8.7 3.5 3.7 6 7.3 6.1h28.5c3.9 0 7-3.1 7-7s-3.1-7-7-7z"
                fill="url(#SVGID_00000050652894193089875010000018243551854575901358_)"
                stroke="#e6effc"
                strokeWidth={0.5}
                strokeMiterlimit={10}
            />
        </Svg>
    )
}

export default SvgComponent