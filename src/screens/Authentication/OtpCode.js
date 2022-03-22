import React, { useState, useRef } from "react";
import {
    Text,
    View,
    TextInput,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { TopNav, Button } from "../../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../../constants";

export default function OtpCode() {
    const navigation = useNavigation();

    const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "" });

    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const fiveInput = useRef();

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
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
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
                        Enter your OTP code here.
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <View
                            style={{
                                borderRadius: 60,
                                backgroundColor: "white",
                                borderWidth: 1,
                                borderColor: COLORS.lightBlue,
                            }}
                        >
                            <TextInput
                                style={{
                                    textAlign: "center",
                                    paddingHorizontal: 22,
                                    paddingVertical: 14.5,
                                    textAlign: "center",
                                    fontSize: 24,
                                    fontFamily: "Mulish_400Regular",
                                    color: COLORS.black,
                                    width: 59,
                                }}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={firstInput}
                                onChangeText={(text) => {
                                    setOtp({ ...otp, 1: text });
                                    text && secondInput.current.focus();
                                }}
                            />
                        </View>
                        <View
                            style={{
                                borderRadius: 60,
                                backgroundColor: "white",
                                borderWidth: 1,
                                borderColor: COLORS.lightBlue,
                            }}
                        >
                            <TextInput
                                style={{
                                    textAlign: "center",
                                    paddingHorizontal: 22,
                                    paddingVertical: 14.5,
                                    textAlign: "center",
                                    fontSize: 24,
                                    fontFamily: "Mulish_400Regular",
                                    color: COLORS.black,
                                    width: 59,
                                }}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={secondInput}
                                onChangeText={(text) => {
                                    setOtp({ ...otp, 2: text });
                                    text
                                        ? thirdInput.current.focus()
                                        : firstInput.current.focus();
                                }}
                            />
                        </View>
                        <View
                            style={{
                                borderRadius: 60,
                                backgroundColor: "white",
                                borderWidth: 1,
                                borderColor: COLORS.lightBlue,
                            }}
                        >
                            <TextInput
                                style={{
                                    textAlign: "center",
                                    paddingHorizontal: 22,
                                    paddingVertical: 14.5,
                                    textAlign: "center",
                                    fontSize: 24,
                                    fontFamily: "Mulish_400Regular",
                                    color: COLORS.black,
                                    width: 59,
                                }}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={thirdInput}
                                onChangeText={(text) => {
                                    setOtp({ ...otp, 3: text });
                                    text
                                        ? fourthInput.current.focus()
                                        : secondInput.current.focus();
                                }}
                            />
                        </View>
                        <View
                            style={{
                                borderRadius: 60,
                                backgroundColor: "white",
                                borderWidth: 1,
                                borderColor: COLORS.lightBlue,
                            }}
                        >
                            <TextInput
                                style={{
                                    textAlign: "center",
                                    paddingHorizontal: 22,
                                    paddingVertical: 14.5,
                                    textAlign: "center",
                                    fontSize: 24,
                                    fontFamily: "Mulish_400Regular",
                                    color: COLORS.black,
                                    width: 59,
                                }}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={fourthInput}
                                onChangeText={(text) => {
                                    setOtp({ ...otp, 4: text });
                                    text
                                        ? fiveInput.current.focus()
                                        : thirdInput.current.focus();
                                }}
                            />
                        </View>
                        <View
                            style={{
                                borderRadius: 60,
                                backgroundColor: "white",
                                borderWidth: 1,
                                borderColor: COLORS.lightBlue,
                            }}
                        >
                            <TextInput
                                style={{
                                    textAlign: "center",
                                    paddingHorizontal: 22,
                                    paddingVertical: 14.5,
                                    textAlign: "center",
                                    fontSize: 24,
                                    fontFamily: "Mulish_400Regular",
                                    color: COLORS.black,
                                    width: 59,
                                }}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={fiveInput}
                                onChangeText={(text) => {
                                    setOtp({ ...otp, 5: text });
                                    !text && fourthInput.current.focus();
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginVertical: 30,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Mulish_400Regular",
                                fontSize: 16,
                                color: COLORS.gray,
                                marginRight: 3,
                                lineHeight: 16 * 1.7,
                            }}
                        >
                            Didn’t receive the OTP?
                        </Text>
                        <TouchableOpacity onPress={() => console.log("Resend")}>
                            <Text
                                style={{
                                    fontFamily: "Mulish_400Regular",
                                    fontSize: 16,
                                    color: COLORS.black,
                                }}
                            >
                                Resend.
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Button
                        text="verify"
                        onPress={() => navigation.navigate("AccountCreated")}
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
