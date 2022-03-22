import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { COLORS, FONTS } from "../constants";

export default function Button({ text, onPress, containerStyle }) {
    return (
        <View style={{ ...containerStyle, width: "100%" }}>
            <TouchableOpacity
                style={{
                    width: "100%",
                    height: 50,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: COLORS.black,
                }}
                onPress={onPress}
            >
                <Text
                    style={{
                        color: COLORS.white,
                        textTransform: "uppercase",
                        ...FONTS.Mulish_600SemiBold,
                        fontSize: 14,
                    }}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
