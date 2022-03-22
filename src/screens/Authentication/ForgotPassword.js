import {
    Text,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { TopNav, InputField, Button } from "../../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../../constants";

export default function ForgotPassword() {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <TopNav
                text="Forgot password"
                back={true}
                backOnPress={() => navigation.goBack()}
            />
        );
    }

    function renderContent() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: 20,
                    }}
                >
                    <Text
                        style={{
                            marginTop: 30,
                            ...FONTS.Mulish_400Regular,
                            fontSize: 16,
                            color: COLORS.gray,
                            lineHeight: 16 * 1.7,
                            marginBottom: 40,
                        }}
                    >
                        Please enter your email address. You will receive a link
                        to create a new password via email.
                    </Text>
                    <InputField
                        text="Email"
                        placeholder="kristinwatson@mail.com"
                        containerStyle={{ marginBottom: 20 }}
                    />
                    <Button
                        text="send"
                        onPress={() => navigation.navigate("NewPassword")}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    return (
        <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
}
