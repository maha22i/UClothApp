import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Canceled = (props) => (
    <Svg
        width={80}
        height={21}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M5.825 16.126c-.99 0-1.83-.205-2.52-.616a4.09 4.09 0 0 1-1.596-1.75c-.364-.756-.546-1.657-.546-2.702s.182-1.941.546-2.688a4.09 4.09 0 0 1 1.596-1.75c.69-.41 1.53-.616 2.52-.616.7 0 1.325.107 1.876.322.55.215 1.031.527 1.442.938l-.434.924c-.448-.392-.891-.677-1.33-.854-.439-.187-.952-.28-1.54-.28-1.13 0-1.988.35-2.576 1.05-.588.7-.882 1.685-.882 2.954 0 1.27.294 2.259.882 2.968.588.7 1.447 1.05 2.576 1.05.588 0 1.101-.089 1.54-.266.439-.187.882-.48 1.33-.882l.434.938c-.41.401-.891.714-1.442.938-.55.215-1.176.322-1.876.322Zm7.602 0c-.626 0-1.172-.145-1.638-.434a3.008 3.008 0 0 1-1.092-1.26c-.252-.541-.378-1.19-.378-1.946 0-.765.125-1.419.377-1.96.262-.541.626-.957 1.093-1.246.466-.29 1.012-.434 1.638-.434.634 0 1.18.163 1.638.49.466.317.774.751.924 1.302h-.169l.155-1.666h1.092c-.029.27-.056.546-.084.826-.02.27-.029.537-.029.798V16H15.82v-1.652h.155a2.23 2.23 0 0 1-.925 1.302c-.466.317-1.008.476-1.623.476Zm.223-.924c.672 0 1.204-.229 1.596-.686.393-.467.588-1.143.588-2.03 0-.896-.195-1.573-.588-2.03-.392-.467-.924-.7-1.596-.7-.662 0-1.194.233-1.595.7-.393.457-.588 1.134-.588 2.03 0 .887.195 1.563.588 2.03.4.457.933.686 1.595.686Zm5.497.798v-5.404c0-.261-.014-.527-.042-.798-.019-.28-.042-.555-.07-.826h1.092l.14 1.54h-.168c.205-.541.532-.952.98-1.232.457-.29.985-.434 1.582-.434.83 0 1.456.224 1.876.672.43.439.644 1.134.644 2.086V16h-1.134v-4.326c0-.663-.135-1.143-.406-1.442-.261-.308-.672-.462-1.232-.462-.653 0-1.171.2-1.554.602-.383.401-.574.938-.574 1.61V16h-1.134Zm11.157.126c-.69 0-1.292-.15-1.806-.448a3.049 3.049 0 0 1-1.176-1.274c-.27-.55-.406-1.204-.406-1.96 0-.765.14-1.414.42-1.946.28-.541.672-.952 1.176-1.232.514-.28 1.11-.42 1.792-.42.448 0 .882.08 1.302.238.43.159.784.383 1.064.672l-.406.812a2.768 2.768 0 0 0-.924-.602 2.587 2.587 0 0 0-.966-.196c-.728 0-1.293.229-1.694.686-.401.457-.602 1.125-.602 2.002 0 .868.2 1.54.602 2.016.401.476.966.714 1.694.714.308 0 .626-.06.952-.182.336-.121.649-.322.938-.602l.406.798a2.85 2.85 0 0 1-1.078.686c-.43.159-.858.238-1.288.238Zm6.963 0c-1.101 0-1.97-.317-2.604-.952-.635-.644-.952-1.535-.952-2.674 0-.737.14-1.377.42-1.918.28-.55.672-.975 1.176-1.274.504-.308 1.083-.462 1.736-.462.644 0 1.185.135 1.624.406.439.27.775.658 1.008 1.162.233.495.35 1.083.35 1.764v.42H34.58v-.714h4.704l-.238.182c0-.747-.168-1.33-.504-1.75-.336-.42-.835-.63-1.498-.63-.7 0-1.246.247-1.638.742-.392.485-.588 1.143-.588 1.974v.126c0 .877.215 1.545.644 2.002.439.448 1.05.672 1.834.672.42 0 .812-.06 1.176-.182.373-.13.728-.34 1.064-.63l.392.798c-.308.299-.7.532-1.176.7a4.578 4.578 0 0 1-1.484.238ZM41.76 16V5.696h1.134V16H41.76Zm6.458.126c-1.101 0-1.97-.317-2.604-.952-.634-.644-.952-1.535-.952-2.674 0-.737.14-1.377.42-1.918.28-.55.672-.975 1.176-1.274.504-.308 1.083-.462 1.736-.462.644 0 1.186.135 1.624.406.439.27.775.658 1.008 1.162.234.495.35 1.083.35 1.764v.42H45.53v-.714h4.704l-.238.182c0-.747-.168-1.33-.504-1.75-.336-.42-.835-.63-1.498-.63-.7 0-1.246.247-1.638.742-.392.485-.588 1.143-.588 1.974v.126c0 .877.215 1.545.644 2.002.439.448 1.05.672 1.834.672.42 0 .812-.06 1.176-.182.374-.13.728-.34 1.064-.63l.392.798c-.308.299-.7.532-1.176.7a4.577 4.577 0 0 1-1.484.238Zm7.153 0c-.616 0-1.157-.145-1.623-.434a3.008 3.008 0 0 1-1.092-1.26c-.252-.541-.378-1.19-.378-1.946 0-.765.126-1.419.378-1.96.26-.541.625-.957 1.092-1.246.466-.29 1.008-.434 1.623-.434.635 0 1.181.159 1.639.476.466.317.779.747.938 1.288h-.169V5.696h1.134V16h-1.12v-1.68h.154a2.295 2.295 0 0 1-.924 1.33c-.466.317-1.017.476-1.652.476Zm.238-.924c.663 0 1.195-.229 1.596-.686.402-.467.602-1.143.602-2.03 0-.896-.2-1.573-.602-2.03-.4-.467-.933-.7-1.596-.7-.662 0-1.194.233-1.596.7-.392.457-.587 1.134-.587 2.03 0 .887.195 1.563.587 2.03.402.457.934.686 1.596.686Z"
            fill="#F4303C"
        />
        <Path
            d="m76.5 7.5-7 7M69.5 7.5l7 7"
            stroke="#F4303C"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default Canceled;