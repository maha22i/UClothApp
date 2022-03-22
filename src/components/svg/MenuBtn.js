import * as React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const MenuBtn = () => (
    <Svg width={25} height={12} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
            stroke="#111"
            strokeWidth={2}
            strokeLinecap="round"
            d="M1 1h18M1 6h23M1 11h18"
        />
    </Svg>
);

export default MenuBtn;
