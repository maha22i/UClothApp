import {
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { TopNav, Line, InputField, Button, Photo } from "../components";

import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../constants";

export default function EditProfile() {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <TopNav
                text="Edit profile"
                back={true}
                bag={true}
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
                        alignItems: "center",
                        paddingBottom: 20,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <Line
                        containerStyle={{ marginTop: 23, marginBottom: 20 }}
                    />
                    <TouchableOpacity
                        style={{ width: 126, height: 126, marginBottom: 45 }}
                        onPress={() => navigation.navigate("EditProfile")}
                    >
                        <Image
                            source={require("../images/icons/01.png")}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 63,
                                borderWidth: 6,
                                borderColor: COLORS.lightBlue,
                            }}
                        />
                        <View
                            style={{
                                position: "absolute",
                                right: 0,
                                bottom: 0,
                            }}
                        >
                            <Photo />
                        </View>
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: 20 }}>
                        <InputField
                            text={"name"}
                            placeholder={"Kristin Watson"}
                            containerStyle={{ marginBottom: 20 }}
                        />
                        <InputField
                            text={"email"}
                            placeholder={"kristinwatson@mail.com"}
                            containerStyle={{ marginBottom: 20 }}
                        />
                        <InputField
                            text={"Phone number"}
                            placeholder={"+17 123456789"}
                            keyboardType="phone-pad"
                            containerStyle={{ marginBottom: 20 }}
                        />
                        <InputField
                            text={"location"}
                            placeholder={"Chicago, USA"}
                            containerStyle={{ marginBottom: 20 }}
                        />
                    </View>
                    <Button
                        text={"save changes"}
                        onPress={() => navigation.goBack()}
                        containerStyle={{ paddingHorizontal: 20 }}
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
