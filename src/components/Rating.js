import { View, Text } from "react-native";
import React from "react";

import Star from "../components/svg/Star";
import { COLORS, FONTS } from "../constants";

export default function Rating({ rating, containerStyle, quantity }) {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                ...containerStyle,
            }}
        >
            <View style={{ marginRight: 3 }}>
                <Star
                    activeColor={
                        rating >= 1 ? COLORS.golden : COLORS.transparent
                    }
                />
            </View>
            <View style={{ marginRight: 3 }}>
                <Star
                    activeColor={
                        rating >= 2 ? COLORS.golden : COLORS.transparent
                    }
                />
            </View>
            <View style={{ marginRight: 3 }}>
                <Star
                    activeColor={
                        rating >= 3 ? COLORS.golden : COLORS.transparent
                    }
                />
            </View>
            <View style={{ marginRight: 3 }}>
                <Star
                    activeColor={
                        rating >= 4 ? COLORS.golden : COLORS.transparent
                    }
                />
            </View>
            <View style={{ marginRight: 5 }}>
                <Star
                    activeColor={
                        rating >= 5 ? COLORS.golden : COLORS.transparent
                    }
                />
            </View>
            {quantity && (
                <Text
                    style={{
                        ...FONTS.Mulish_400Regular,
                        fontSize: 12,
                        color: COLORS.gray,
                        lineHeight: 12 * 1.7,
                    }}
                >
                    ({quantity})
                </Text>
            )}
        </View>
    );
}
