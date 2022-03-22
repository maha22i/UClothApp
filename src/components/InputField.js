import { View, Text, TextInput } from "react-native";
import React from "react";

import { COLORS } from "../constants";

export default function InputField({
    text,
    placeholder,
    icon,
    containerStyle,
    secureTextEntry,
    keyboardType,
}) {
    return (
        <View
            style={{
                paddingLeft: 30,
                paddingRight: icon ? 0 : 30,
                height: 50,
                width: "100%",
                borderWidth: 1,
                borderColor: COLORS.lightBlue,
                borderRadius: 50,
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                ...containerStyle,
            }}
        >
            <TextInput
                placeholder={placeholder}
                style={{
                    flex: 1,
                    height: "100%",
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={COLORS.black}
                keyboardType={keyboardType}
            />
            <View
                style={{
                    position: "absolute",
                    top: -8,
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
                    {text}
                </Text>
            </View>
            {icon}
        </View>
    );
}
