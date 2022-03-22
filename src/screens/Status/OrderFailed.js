import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Fail, Line, Button } from "../../components";
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
                showsVerticalScrollIndicator={false}
            >
                <Fail />
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
                    Sorry! Your order has failed!
                </Text>
                <Text
                    style={{
                        ...FONTS.Mulish_400Regular,
                        fontSize: 16,
                        color: COLORS.gray,
                        textAlign: "center",
                        lineHeight: 16 * 1.7,
                        marginBottom: 30,
                        paddingHorizontal: 40,
                    }}
                >
                    Something went wrong. Please try again to contimue your
                    order.
                </Text>
                <Button
                    text="View orders"
                    containerStyle={{
                        marginBottom: 23,
                    }}
                    onPress={() => navigation.navigate("OrderHistory")}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("MainLayout")}
                >
                    <Text
                        style={{
                            ...FONTS.Mulish_600SemiBold,
                            fontSize: 14,
                            textTransform: "uppercase",
                            lineHeight: 14 * 1.7,
                        }}
                    >
                        go to my profile
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
