import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.5 30.7" {...props}>
            <Defs>
                <LinearGradient
                    id="linear-gradient"
                    x1={1.86}
                    y1={5.29}
                    x2={15.52}
                    y2={28.96}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0} stopColor="#3392d6" />
                    <Stop offset={0.45} stopColor="#3392d6" />
                    <Stop offset={1} stopColor="#2271a9" />
                </LinearGradient>
            </Defs>
            <G id="Layer_2" data-name="Layer 2">
                <G id="Weather_Icons" data-name="Weather Icons">
                    <Path
                        d="M10.25.45c-6.09 9-10 14.62-10 20.09a10 10 0 0020 0c0-5.47-3.91-11.1-10-20.09z"
                        stroke="#2885c7"
                        strokeMiterlimit={10}
                        strokeWidth=".5px"
                        fill="url(#linear-gradient)"
                    />
                    <Path
                        d="M4.49 13.64A3 3 0 016.61 13a3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.19a2.44 2.44 0 01-.74 1.89 3 3 0 01-2.12.69 3 3 0 01-2.12-.69 2.44 2.44 0 01-.74-1.89v-1.24a2.51 2.51 0 01.74-1.92zm11-.24a.42.42 0 01-.08.4L7.23 25.14a1.48 1.48 0 01-.44.44 1.87 1.87 0 01-.72.09H5.4c-.2 0-.33-.06-.38-.18a.41.41 0 01.09-.42l8.2-11.35a1 1 0 01.41-.41 1.79 1.79 0 01.67-.08h.76c.19 0 .31.05.36.17zm-8.9 1.18c-.79 0-1.19.35-1.19 1.06v1.06c0 .71.4 1.06 1.19 1.06s1.21-.35 1.21-1.06v-1.06c0-.71-.4-1.06-1.19-1.06zm5.16 5.63a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.44 2.44 0 01-.73 1.89 3 3 0 01-2.12.69 3 3 0 01-2.12-.69 2.44 2.44 0 01-.76-1.89v-1.24a2.51 2.51 0 01.77-1.92zm2.12.93c-.79 0-1.19.36-1.19 1.07v1c0 .72.4 1.08 1.19 1.08s1.19-.36 1.19-1.08v-1c.02-.71-.38-1.07-1.17-1.07z"
                        fill="#fff"
                    />
                </G>
            </G>
        </Svg>
    )
}

export default SvgComponent

