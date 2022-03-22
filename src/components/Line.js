import { View, Text } from "react-native";
import React from "react";

import { COLORS } from "../constants";

export default function Line({ containerStyle }) {
    return (
        <View
            style={{
                width: 1,
                height: 30,
                backgroundColor: COLORS.black,
                alignSelf: "center",
                ...containerStyle,
            }}
        />
    );
}
