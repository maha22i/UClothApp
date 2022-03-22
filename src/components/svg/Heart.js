import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Heart = ({ fillColor, strokeColor }) => (
    <Svg
        width={20}
        height={20}
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M17.367 3.842a4.583 4.583 0 0 0-6.484 0L10 4.725l-.883-.883a4.584 4.584 0 0 0-6.484 6.483l.884.883L10 17.692l6.483-6.484.884-.883a4.581 4.581 0 0 0 0-6.483v0Z"
            stroke={strokeColor}
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default Heart;
