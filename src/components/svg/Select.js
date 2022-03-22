import { View, TouchableOpacity } from "react-native";
import React from "react";

import { COLORS } from "../../constants";

export default function Select({ isSelect, onPress, containerStyle }) {
    return (
        <View
            style={{
                width: 20,
                height: 20,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: COLORS.lightBlue,
                alignItems: "center",
                justifyContent: "center",
                ...containerStyle,
            }}
            onPress={onPress}
        >
            <View
                style={{
                    width: 10,
                    height: 10,
                    backgroundColor:
                        isSelect == true ? COLORS.carrot : COLORS.transparent,

                    borderRadius: 50,
                }}
            />
        </View>
    );
}
