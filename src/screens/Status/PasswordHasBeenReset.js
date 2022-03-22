import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import { TopNav, Key, Line, Button } from "../../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../../constants";

export default function PasswordHasBeenReset() {
    const navigation = useNavigation();

    function renderHeader() {
        return <TopNav logo={true} />;
    }

    function renderContent() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20 }}
            >
                <View
                    style={{
                        alignItems: "center",
                        marginTop: 40,
                        marginBottom: 20,
                    }}
                >
                    <Key />
                </View>
                <Line containerStyle={{ marginBottom: 14 }} />
                <Text
                    style={{
                        textAlign: "center",
                        ...FONTS.H2,
                        color: COLORS.black,
                        paddingHorizontal: 60,
                        marginBottom: 14,
                    }}
                >
                    Your password has been reset!
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        ...FONTS.Mulish_400Regular,
                        fontSize: 16,
                        color: COLORS.gray,
                        lineHeight: 16 * 1.7,
                        paddingHorizontal: 40,
                        marginBottom: 30,
                    }}
                >
                    Qui ex aute ipsum duis. Incididunt adipisicing voluptate
                    laborum
                </Text>
                <Button
                    text="done"
                    containerStyle={{ marginBottom: 30 }}
                    onPress={() => navigation.navigate("SignIn")}
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
