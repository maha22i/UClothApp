import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const Add = (props) => (
    <Svg
        width={30}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M15 8.583v12.834M8.624 15h12.752"
            stroke="#111"
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Rect
            x={0.5}
            y={0.5}
            width={29}
            height={29}
            rx={14.5}
            stroke="#DBE3F5"
        />
    </Svg>
);

export default Add;
