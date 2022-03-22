import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import ViewAll from "../components/svg/ViewAll";

import { FONTS } from "../constants";

export default function Heading({ text, onPress, containerStyle }) {
    return (
        <View
            style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                ...containerStyle,
            }}
        >
            <Text style={{ ...FONTS.H3 }}>{text}</Text>
            <TouchableOpacity onPress={onPress}>
                <ViewAll />
            </TouchableOpacity>
        </View>
    );
}
