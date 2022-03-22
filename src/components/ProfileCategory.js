import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";

import Arrow from "../components/svg/Arrow";

export default function ProfileCategory({
    text,
    containerStyle,
    icon,
    rightIcon,
    onPress,
}) {
    return (
        <TouchableOpacity
            style={{
                borderTopWidth: 1,
                borderTopColor: COLORS.lightBlue,
                paddingHorizontal: 20,
                paddingVertical: 10,
                ...containerStyle,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
            }}
            onPress={onPress}
        >
            <View
                style={{
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: COLORS.lightBlue,
                    borderRadius: 25,
                    marginRight: 14,
                }}
            >
                {icon}
            </View>
            <Text style={{ flex: 1, ...FONTS.H5, color: COLORS.black }}>
                {text}
            </Text>
            {rightIcon && (
                <Arrow fillColor={COLORS.black} strokeColor={COLORS.black} />
            )}
        </TouchableOpacity>
    );
}
