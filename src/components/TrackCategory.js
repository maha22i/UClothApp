import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";

export default function TrackCategory({ line, performed, status, comment }) {
    return (
        <View style={{ flexDirection: "row", marginBottom: 6 }}>
            <View style={{ alignItems: "center", marginRight: 24 }}>
                <View
                    style={{
                        width: 30,
                        height: 30,
                        borderWidth: 2,
                        borderColor: COLORS.lightBlue,
                        borderRadius: 15,
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 7,
                    }}
                >
                    {performed && (
                        <View
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: 6,
                                backgroundColor: COLORS.black,
                            }}
                        />
                    )}
                </View>
                {line && (
                    <View
                        style={{
                            width: 1,
                            height: 30,
                            backgroundColor: COLORS.black,
                        }}
                    />
                )}
            </View>
            <View>
                <Text
                    style={{
                        ...FONTS.H5,
                        color: COLORS.black,
                        marginBottom: 6,
                    }}
                >
                    {status}
                </Text>
                <Text
                    style={{
                        ...FONTS.Mulish_400Regular,
                        fontSize: 12,
                        color: COLORS.gray,
                        lineHeight: 12 * 1.5,
                    }}
                >
                    {comment}
                </Text>
            </View>
        </View>
    );
}
