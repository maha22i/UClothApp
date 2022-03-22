import React from "react";
import Svg, { Path } from "react-native-svg";

export default function Back({ color }) {
    return (
        <Svg
            width={8}
            height={14}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M7 13 1 7l6-6"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
