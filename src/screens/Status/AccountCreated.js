import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Created, Line, Button, TopNav } from "../../components";
import { FONTS, COLORS, ANDROIDSAFEAREAVIEW } from "../../constants";

export default function AccountCreated() {
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
                    <Created />
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
                    Account Created!
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
                    Your account had beed created successfully.
                </Text>
                <Button
                    text="shop now"
                    containerStyle={{ marginBottom: 30 }}
                    onPress={() => navigation.navigate("MainLayout")}
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
