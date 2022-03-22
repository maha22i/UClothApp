import {
    Text,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { TopNav, InputField, EyeOff, EyeOn, Button } from "../../components";
import { ANDROIDSAFEAREAVIEW, FONTS, COLORS } from "../../constants";

export default function NewPassword() {
    const navigation = useNavigation();

    const [passVissibleOne, setPassVissibleOne] = useState(false);
    const [passVissibleTwo, setPassVissibleTwo] = useState(false);

    function renderHeader() {
        return (
            <TopNav
                text="Reset password"
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
                <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
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
                        Enter new password and confirm.
                    </Text>
                    <InputField
                        text="new password"
                        placeholder="••••••••"
                        containerStyle={{ marginBottom: 20 }}
                        secureTextEntry={
                            passVissibleOne == false ? true : false
                        }
                        icon={
                            <TouchableOpacity
                                style={{
                                    paddingHorizontal: 30,
                                    height: "100%",
                                    justifyContent: "center",
                                }}
                                onPress={() => {
                                    setPassVissibleOne(
                                        (passVissibleOne) => !passVissibleOne
                                    );
                                }}
                            >
                                {passVissibleOne == false ? (
                                    <EyeOff />
                                ) : (
                                    <EyeOn />
                                )}
                            </TouchableOpacity>
                        }
                    />
                    <InputField
                        text="confirm password"
                        placeholder="••••••••"
                        containerStyle={{ marginBottom: 20 }}
                        secureTextEntry={
                            passVissibleTwo == false ? true : false
                        }
                        icon={
                            <TouchableOpacity
                                style={{
                                    paddingHorizontal: 30,
                                    height: "100%",
                                    justifyContent: "center",
                                }}
                                onPress={() => {
                                    setPassVissibleTwo(
                                        (passVissibleTwo) => !passVissibleTwo
                                    );
                                }}
                            >
                                {passVissibleTwo == false ? (
                                    <EyeOff />
                                ) : (
                                    <EyeOn />
                                )}
                            </TouchableOpacity>
                        }
                    />
                    <Button
                        text="change password"
                        onPress={() =>
                            navigation.navigate("PasswordHasBeenReset")
                        }
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
