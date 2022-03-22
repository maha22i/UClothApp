import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";
import Check from "../components/svg/Check";

export default function PaymentSystem({
    icon,
    paymentName,
    selected,
    onPress,
}) {
    return (
        <TouchableOpacity
            style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 20,
                paddingHorizontal: 20,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.lightBlue,
            }}
            onPress={onPress}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                    style={{ marginRight: 8, ...FONTS.H5, color: COLORS.black }}
                >
                    {paymentName}
                </Text>
                <Check strokeColor={selected && "#00824B"} />
            </View>
            {icon}
        </TouchableOpacity>
    );
}
