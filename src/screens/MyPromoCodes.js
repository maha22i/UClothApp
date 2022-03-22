import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
} from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { TopNav, Copy, Line, Button, Percent, InputField } from "../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../constants";

const PROMOCODES = [
    {
        id: "1",
        code: "Acme Co.",
        discount: "50% off",
        color: "#F4303C",
        term: "Valid until June 30, 2021",
        image: require("../images/promocodes/01.jpg"),
    },
    {
        id: "2",
        code: "Abstergo Ltd.",
        discount: "30% off",
        color: "#EF962D",
        term: "Valid until June 30, 2021",
        image: require("../images/promocodes/02.jpg"),
    },
    {
        id: "3",
        code: "Barone LLC.",
        discount: "15% off",
        color: "#00824B",
        term: "Valid until June 30, 2021",
        image: require("../images/promocodes/03.jpg"),
    },
];

export default function MyPromoCodes() {
    const navigation = useNavigation();

    const [category, setCategory] = useState("current");

    function renderHeader() {
        return (
            <TopNav
                text="My promocodes"
                navigation={true}
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
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                        marginVertical: 20,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => setCategory("current")}
                        style={{
                            backgroundColor:
                                category == "current"
                                    ? COLORS.black
                                    : COLORS.lightBlue,
                            borderRadius: 30,
                            marginHorizontal: 4,
                        }}
                    >
                        <Text
                            style={{
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                marginHorizontal: 4,
                                fontFamily: "Mulish_600SemiBold",
                                fontSize: 14,
                                color:
                                    category == "current"
                                        ? COLORS.white
                                        : COLORS.black,
                            }}
                        >
                            Current
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setCategory("used")}
                        style={{
                            backgroundColor:
                                category == "used"
                                    ? COLORS.black
                                    : COLORS.lightBlue,
                            borderRadius: 30,
                            marginHorizontal: 4,
                        }}
                    >
                        <Text
                            style={{
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                marginHorizontal: 4,
                                fontFamily: "Mulish_600SemiBold",
                                fontSize: 14,
                                color:
                                    category == "used"
                                        ? COLORS.white
                                        : COLORS.black,
                            }}
                        >
                            Used
                        </Text>
                        <View></View>
                    </TouchableOpacity>
                </View>
                {PROMOCODES.map((item, index) => (
                    <TouchableOpacity
                        key={item.id}
                        style={{
                            paddingVertical: 20,
                            flexDirection: "row",
                            borderBottomWidth: 1,
                            borderColor: COLORS.lightBlue,
                            borderTopWidth: index == 0 ? 1 : 0,
                        }}
                    >
                        <Image
                            source={item.image}
                            style={{ width: 73, height: 84, marginRight: 14 }}
                        />
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    lineHeight: 18 * 1.2,
                                    ...FONTS.H4,
                                    color: COLORS.black,
                                }}
                            >
                                {item.code}
                            </Text>
                            <Text
                                style={{
                                    flex: 1,
                                    fontSize: 21,
                                    ...FONTS.Mulish_600SemiBold,
                                    color: item.color,
                                    lineHeight: 21 * 1.7,
                                }}
                            >
                                {item.discount}
                            </Text>
                            <Text
                                style={{
                                    lineHeight: 14 * 1.7,
                                    ...FONTS.Mulish_400Regular,
                                    fontSize: 14,
                                    color: COLORS.gray,
                                }}
                            >
                                {item.term}
                            </Text>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Copy />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    }

    function renderPromocodesEmpty() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
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
                        <Percent />
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
                        Your don’t have promocodes yet!
                    </Text>
                    <Text
                        style={{
                            textAlign: "center",
                            ...FONTS.Mulish_400Regular,
                            fontSize: 16,
                            color: COLORS.gray,
                            lineHeight: 16 * 1.7,
                            paddingHorizontal: 40,
                            marginBottom: 35,
                        }}
                    >
                        Qui ex aute ipsum duis. Incididunt adipisicing voluptate
                        laborum
                    </Text>
                    <InputField
                        placeholder="Promocode2022"
                        text="Enter the voucher"
                        containerStyle={{ marginBottom: 20 }}
                    />
                    <Button
                        text="submit"
                        containerStyle={{ marginBottom: 30 }}
                        onPress={() => navigation.navigate("MainLayout")}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    return (
        <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
            {renderHeader()}
            {PROMOCODES.length > 0 ? renderContent() : renderPromocodesEmpty()}
        </SafeAreaView>
    );
}
