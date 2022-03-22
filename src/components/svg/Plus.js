import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Plus = ({ strokeColor }) => (
    <Svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
            d="M6.955 2.917v8.166M2.898 7h8.114"
            stroke={strokeColor}
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default Plus;
