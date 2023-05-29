import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path, Circle } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 64 64"
            {...props}
        >
            <Defs>
                <LinearGradient
                    id="b"
                    x1={22.56}
                    y1={21.96}
                    x2={39.2}
                    y2={50.8}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0} stopColor="#f3f7fe" />
                    <Stop offset={0.45} stopColor="#f3f7fe" />
                    <Stop offset={1} stopColor="#deeafb" />
                </LinearGradient>
                <LinearGradient
                    id="a"
                    x1={30.12}
                    y1={43.48}
                    x2={31.88}
                    y2={46.52}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0} stopColor="#86c3db" />
                    <Stop offset={0.45} stopColor="#86c3db" />
                    <Stop offset={1} stopColor="#5eafcf" />
                </LinearGradient>
                <LinearGradient
                    id="c"
                    x1={29.67}
                    y1={42.69}
                    x2={32.33}
                    y2={47.31}
                    xlinkHref="#a"
                />
                
                
            </Defs>
            <Path
                d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
                stroke="#e6effc"
                strokeMiterlimit={10}
                strokeWidth={0.5}
                fill="url(#b)"
            />
            <Circle
                cx={31}
                cy={45}
                r={1.25}
                fill="none"
                strokeMiterlimit={10}
                stroke="url(#a)"
            />
            <Path
                d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit={10}
                stroke="url(#a)"
            />
            <Circle
                cx={24}
                cy={45}
                r={1.25}
                fill="none"
                strokeMiterlimit={10}
                stroke="url(#a)"
            />
            <Path
                d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit={10}
                stroke="url(#a)"
            />
            <Circle
                cx={38}
                cy={45}
                r={1.25}
                fill="none"
                strokeMiterlimit={10}
                stroke="url(#a)"
            />
            <Path
                d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit={10}
                stroke="url(#a)"
            />
        </Svg>
    )
}

export default SvgComponent

