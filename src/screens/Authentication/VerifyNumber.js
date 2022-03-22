import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import PhoneInput from "react-native-phone-input";
import { useNavigation } from "@react-navigation/native";

import { TopNav, Button } from "../../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../../constants";

export default function VerifyNumber() {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <TopNav
                text="Verify your phone number"
                back={true}
                backOnPress={() => navigation.goBack()}
            />
        );
    }

    function renderContent() {
        return (
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 20 }}
                showsVerticalScrollIndicator={false}
            >
                <Text
                    style={{
                        ...FONTS.Mulish_400Regular,
                        fontSize: 16,
                        color: COLORS.gray,
                        paddingTop: 20,
                        lineHeight: 25,
                        marginBottom: 30,
                    }}
                >
                    We have sent you an SMS with a code to number +17
                    0123456789.
                </Text>
                <PhoneInput
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "#E2E2E2",
                        marginBottom: 20,
                        fontSize: 16,
                        ...FONTS.Mulish_400Regular,
                        paddingBottom: 9,
                    }}
                    placeholder="123456789"
                    placeholderTextColor={COLORS.black}
                    initialCountry={"us"}
                />
                <Button
                    text="confirm"
                    onPress={() => navigation.navigate("OtpCode")}
                />
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
