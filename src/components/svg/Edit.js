import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Edit = (props) => (
    <Svg
        width={14}
        height={14}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M7 11.667h5.25M9.625 2.042a1.237 1.237 0 1 1 1.75 1.75l-7.292 7.291-2.333.584.583-2.334 7.292-7.291Z"
            stroke="#626262"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default Edit;
