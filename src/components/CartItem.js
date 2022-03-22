import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";

export default function OrderItem({
    name,
    quantity,
    newPrice,
    size,
    color,
    discount,
    cartList,
    delivery,
}) {
    return (
        <View>
            {cartList && (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 3,
                    }}
                >
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Text
                            style={{
                                ...FONTS.Mulish_400Regular,
                                fontSize: 14,
                                lineHeight: 14 * 1.7,
                                color: COLORS.gray,
                            }}
                        >
                            {name}, {""}
                        </Text>
                        <Text
                            style={{
                                ...FONTS.Mulish_400Regular,
                                fontSize: 14,
                                lineHeight: 14 * 1.7,
                                color: COLORS.gray,
                            }}
                        >
                            {size}, {""}
                        </Text>
                        <Text
                            style={{
                                ...FONTS.Mulish_400Regular,
                                fontSize: 14,
                                lineHeight: 14 * 1.7,
                                color: COLORS.gray,
                            }}
                        >
                            {color}
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.Mulish_400Regular,
                                fontSize: 14,
                                lineHeight: 14 * 1.7,
                                color: COLORS.gray,
                            }}
                        >
                            {quantity} {""}x {""}
                        </Text>
                        <Text
                            style={{
                                ...FONTS.Mulish_400Regular,
                                fontSize: 14,
                                lineHeight: 14 * 1.7,
                                color: COLORS.gray,
                            }}
                        >
                            {newPrice}
                        </Text>
                    </View>
                </View>
            )}
            {discount && (
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.Mulish_400Regular,
                            fontSize: 14,
                            lineHeight: 14 * 1.7,
                            color: COLORS.gray,
                        }}
                    >
                        Discount
                    </Text>
                    <Text
                        style={{
                            ...FONTS.Mulish_400Regular,
                            fontSize: 14,
                            lineHeight: 14 * 1.7,
                            color: COLORS.gray,
                        }}
                    >
                        -4.29
                    </Text>
                </View>
            )}
            {delivery && (
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.Mulish_400Regular,
                            fontSize: 14,
                            lineHeight: 14 * 1.7,
                            color: COLORS.gray,
                        }}
                    >
                        Delivery
                    </Text>
                    <Text
                        style={{
                            ...FONTS.Mulish_400Regular,
                            fontSize: 14,
                            lineHeight: 14 * 1.7,
                            color: "#00824B",
                        }}
                    >
                        Free
                    </Text>
                </View>
            )}
        </View>
    );
}
