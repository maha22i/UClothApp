import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BigStar = (props) => (
    <Svg
        width={34}
        height={33}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="m17 .333 5.15 10.434 11.517 1.683-8.334 8.117L27.3 32.033 17 26.617 6.7 32.033l1.967-11.466L.333 12.45l11.517-1.683L17 .333Z"
            fill="#DBE3F5"
        />
    </Svg>
);

export default BigStar;
