import { View, Text, TextInput } from "react-native";
import React from "react";

import { COLORS } from "../constants";

export default function CommentInput({ containerStyle }) {
    return (
        <View style={{ ...containerStyle }}>
            <View
                style={{
                    width: "100%",
                    height: 131,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: COLORS.lightBlue,
                }}
            >
                <TextInput
                    style={{
                        width: "100%",
                        height: "100%",
                        paddingHorizontal: 30,
                        paddingTop: 23,
                        paddingBottom: 23,
                    }}
                    placeholder="Enter your comment"
                    textAlignVertical="top"
                />
                <View
                    style={{
                        position: "absolute",
                        top: -10,
                        left: 20,
                        paddingHorizontal: 10,
                        backgroundColor: COLORS.white,
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.gray,
                            fontFamily: "Mulish_600SemiBold",
                            fontSize: 12,
                            textTransform: "uppercase",
                        }}
                    >
                        comment
                    </Text>
                </View>
            </View>
        </View>
    );
}
