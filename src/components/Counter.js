import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { COLORS } from "../constants";
import Minus from "../components/svg/Minus";
import Plus from "../components/svg/Plus";

export default function Counter({ containerStyle, value = 1, onAdd, onMinus }) {
    return (
        <View
            style={{
                alignItems: "center",
                justifyContent: "space-between",
                ...containerStyle,
            }}
        >
            <TouchableOpacity
                style={{
                    width: 30,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: COLORS.lightBlue,
                    borderRadius: 50,
                }}
                onPress={onAdd}
            >
                <Plus strokeColor={COLORS.black} />
            </TouchableOpacity>
            <View>
                <Text
                    style={{
                        fontFamily: "Mulish_600SemiBold",
                        color: COLORS.gray,
                        fontSize: 14,
                    }}
                >
                    {value}
                </Text>
            </View>
            <TouchableOpacity
                style={{
                    width: 30,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: COLORS.lightBlue,
                    borderRadius: 50,
                }}
                onPress={onMinus}
            >
                <Minus strokeColor={COLORS.black} />
            </TouchableOpacity>
        </View>
    );
}
