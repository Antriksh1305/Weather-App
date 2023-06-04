// import * as React from "react"
// import Svg, { Defs, LinearGradient, Stop, Circle, Path } from "react-native-svg"
// /* SVGR has dropped some elements not supported by react-native-svg: animateTransform */

// function SvgComponent(props) {
//     return (
//         <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
//             <Defs>
//                 <LinearGradient
//                     id="a"
//                     x1={26.75}
//                     y1={22.91}
//                     x2={37.25}
//                     y2={41.09}
//                     gradientUnits="userSpaceOnUse"
//                 >
//                     <Stop offset={0} stopColor="#fbbf24" />
//                     <Stop offset={0.45} stopColor="#fbbf24" />
//                     <Stop offset={1} stopColor="#f59e0b" />
//                 </LinearGradient>
//             </Defs>
//             <Circle
//                 cx={32}
//                 cy={32}
//                 r={10.5}
//                 stroke="#f8af18"
//                 strokeMiterlimit={10}
//                 strokeWidth={0.5}
//                 fill="url(#a)"
//             />
//             <Path
//                 d="M32 15.91V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"
//                 fill="none"
//                 stroke="#fbbf24"
//                 strokeLinecap="round"
//                 strokeMiterlimit={10}
//                 strokeWidth={2.5}
//             ></Path>
//         </Svg>
//     )
// }

// export default SvgComponent
import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Circle, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
            <Defs>
                <LinearGradient
                    id="a"
                    x1={16.5}
                    y1={19.67}
                    x2={21.5}
                    y2={28.33}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0} stopColor="#fbbf24" />
                    <Stop offset={0.45} stopColor="#fbbf24" />
                    <Stop offset={1} stopColor="#f59e0b" />
                </LinearGradient>
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
            </Defs>
            <Circle
                cx={19}
                cy={24}
                r={5}
                stroke="#f8af18"
                strokeMiterlimit={10}
                strokeWidth={0.5}
                fill="url(#a)"
            />
            <Path
                d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
                fill="none"
                stroke="#fbbf24"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={2}
            />
            <Path
                d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
                stroke="#e6effc"
                strokeMiterlimit={10}
                strokeWidth={0.5}
                fill="url(#b)"
            />
        </Svg>
    )
}

export default SvgComponent
