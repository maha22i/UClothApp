import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const Arrow = ({ fillColor, strokeColor }) => (
    <Svg width={8} height={13} fill="none" xmlns="http://www.w3.org/2000/svg">
        <G clipPath="url(#a)">
            <Path
                d="m2 11.3 4.8-4.8L2 1.7"
                stroke={strokeColor}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path
                    fill={fillColor}
                    transform="translate(.8 .5)"
                    d="M0 0h7.2v12H0z"
                />
            </ClipPath>
        </Defs>
    </Svg>
);

export default Arrow;
