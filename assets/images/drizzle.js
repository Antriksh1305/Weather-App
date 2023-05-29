import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 64 64"
            {...props}
        >
            <Defs>
                <LinearGradient
                    id="linear-gradient"
                    x1={23.59}
                    y1={20.83}
                    x2={25.08}
                    y2={18.25}
                    gradientTransform="matrix(.94 .33 .33 -.94 -5.41 56.95)"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0} stopColor="#4286ee" />
                    <Stop offset={0.45} stopColor="#4286ee" />
                    <Stop offset={1} stopColor="#0950bc" />
                </LinearGradient>
                <LinearGradient
                    id="linear-gradient-4"
                    x1={22.59}
                    y1={44.03}
                    x2={39.22}
                    y2={15.21}
                    gradientTransform="matrix(1 0 0 -1 0 66)"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0} stopColor="#f3f7fe" />
                    <Stop offset={0.45} stopColor="#f3f7fe" />
                    <Stop offset={1} stopColor="#deeafb" />
                </LinearGradient>
            </Defs>
            <Path
                d="M24.24 46.03L23.76 47"
                strokeWidth="2.11px"
                stroke="url(#linear-gradient)"
                strokeMiterlimit={10}
                fill="none"
                strokeLinecap="round"
            />
            <Path
                d="M31.4 46.03L30.93 47"
                strokeWidth="2.11px"
                stroke="url(#linear-gradient)"
                strokeMiterlimit={10}
                fill="none"
                strokeLinecap="round"
            />
            <Path
                d="M38.4 46.03L37.93 47"
                strokeWidth="2.11px"
                stroke="url(#linear-gradient)"
                strokeMiterlimit={10}
                fill="none"
                strokeLinecap="round"
            />
            <Path
                d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.31 7.31 0 00.1 1.14A7.5 7.5 0 0018 45.5h28.5a7 7 0 000-14z"
                stroke="#e6effc"
                strokeWidth=".5px"
                fill="url(#linear-gradient-4)"
                strokeMiterlimit={10}
            />
        </Svg>
    )
}

export default SvgComponent