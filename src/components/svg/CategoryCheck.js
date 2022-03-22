import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CategoryCheck = (props) => (
    <Svg
        width={12}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M10 3 4.5 8.5 2 6"
            stroke="#111"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default CategoryCheck;
