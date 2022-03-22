import { Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Success, Line, Button } from "../../components";
import { ANDROIDSAFEAREAVIEW, SIZES, FONTS, COLORS } from "../../constants";

export default function OrderSuccess() {
    const navigation = useNavigation();

    function renderContent() {
        return (
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingTop: SIZES.height * 0.1,
                    alignItems: "center",
                }}
            >
                <Success />
                <Line containerStyle={{ marginTop: 20, marginBottom: 15 }} />
                <Text
                    style={{
                        ...FONTS.H2,
                        color: COLORS.black,
                        lineHeight: 22 * 1.2,
                        marginBottom: 14,
                        textAlign: "center",
                    }}
                >
                    Thank you for your order!
                </Text>
                <Text
                    style={{
                        ...FONTS.Mulish_400Regular,
                        fontSize: 16,
                        color: COLORS.gray,
                        textAlign: "center",
                        lineHeight: 16 * 1.7,
                        marginBottom: 30,
                        paddingHorizontal: 30,
                    }}
                >
                    Your order will be delivered on time. Thank you!
                </Text>
                <Button
                    text="View orders"
                    containerStyle={{
                        marginBottom: 23,
                    }}
                    onPress={() => navigation.navigate("OrderHistory")}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
                    <Text
                        style={{
                            ...FONTS.Mulish_600SemiBold,
                            fontSize: 14,
                            textTransform: "uppercase",
                            lineHeight: 14 * 1.7,
                        }}
                    >
                        Continue Shopping
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
            {renderContent()}
        </SafeAreaView>
    );
}
