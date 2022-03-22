import * as React from "react";
import { View, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";

const CircleElement = () => (
    <Svg
        width={475}
        height={475}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Circle cx={237.5} cy={237.5} r={207.5} fill="#fff" />
        <Circle cx={237.5} cy={237.5} r={235.5} stroke="#fff" strokeWidth={4} />
    </Svg>
);

export default CircleElement;
