import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { TopNav, Track, Line, TrackCategory } from "../../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS, SIZES } from "../../constants";

export default function TrackYourOrder() {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <TopNav
                text="Track your order"
                back={true}
                backOnPress={() => navigation.goBack()}
            />
        );
    }

    function renderContent() {
        return (
            <ScrollView
                contentContainerStyle={{ alignItems: "center" }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ marginTop: 26, marginBottom: 20 }}>
                    <Track />
                </View>
                <Line containerStyle={{ marginBottom: 20 }} />
                <Text
                    style={{
                        ...FONTS.H3,
                        color: COLORS.black,
                        marginBottom: 4,
                    }}
                >
                    Your order:
                </Text>
                <Text
                    style={{
                        marginBottom: 30,
                        ...FONTS.Mulish_400Regular,
                        fontSize: 16,
                        lineHeight: 16 * 1.7,
                        color: COLORS.gray,
                    }}
                >
                    {"#100345"}
                </Text>
                <View
                    style={{
                        width: SIZES.width,
                        paddingHorizontal: 40,
                        marginBottom: 30,
                    }}
                >
                    <TrackCategory
                        line={true}
                        performed={true}
                        status="Order created"
                        comment="We have received your order"
                    />
                    <TrackCategory
                        line={true}
                        performed={true}
                        status="Order confirmed"
                        comment="Your order has been confirmed"
                    />
                    <TrackCategory
                        line={true}
                        performed={true}
                        status="Order shipping"
                        comment="Estimated for Feb 02, 2022"
                    />
                    <TrackCategory
                        line={true}
                        status="Courier delivering"
                        comment="Estimated for Feb 05, 2022"
                    />
                    <TrackCategory
                        status="Receiving"
                        comment="Estimated for Feb 05, 2022"
                    />
                </View>
            </ScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
}
