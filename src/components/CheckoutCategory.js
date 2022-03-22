import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

import { COLORS, FONTS } from "../constants";

export default function CheckoutCategory({ heading, details, onPress }) {
    const Arrow = (props) => (
        <Svg
            width={6}
            height={10}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="m1 9 4-4-4-4"
                stroke="#111"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );

    return (
        <TouchableOpacity
            style={{
                paddingHorizontal: 20,
                marginTop: 30,
                paddingBottom: 10,
                borderBottomWidth: 4,
                borderColor: COLORS.lightBlue,
            }}
            onPress={onPress}
        >
            <Text
                style={{ ...FONTS.H4, color: COLORS.black, marginBottom: 10 }}
            >
                {heading}
            </Text>
            <Text
                style={{
                    ...FONTS.Mulish_400Regular,
                    color: COLORS.black,
                    fontSize: 14,
                }}
            >
                {details}
            </Text>
            <View
                style={{
                    position: "absolute",
                    right: 0,
                    top: 12,
                    marginHorizontal: 20,
                }}
            >
                <Arrow />
            </View>
        </TouchableOpacity>
    );
}
