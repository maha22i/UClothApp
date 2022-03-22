import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
} from "react-native";
import React from "react";

import { TopNav, Comment, Line, BigStar, Button } from "../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS, SIZES } from "../constants";

import { useNavigation } from "@react-navigation/native";

export default function LeaveAReview() {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <TopNav
                text="Leave a review"
                navigation={true}
                backOnPress={() => console.log("Go to back")}
                back={true}
            />
        );
    }

    function renderContent() {
        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={Platform.OS !== "android" && { flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: 20,
                        alignItems: "center",
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ marginTop: SIZES.height * 0.05 }}>
                        <Comment />
                    </View>
                    <Line
                        containerStyle={{ marginTop: 20, marginBottom: 14 }}
                    />
                    <Text
                        style={{
                            ...FONTS.H2,
                            textAlign: "center",
                            color: COLORS.black,
                            lineHeight: 22 * 1.2,
                            marginBottom: 20,
                            paddingHorizontal: 20,
                        }}
                    >
                        Please rate the quality of service for the order!
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 25,
                        }}
                    >
                        <View style={{ marginHorizontal: 3.5 }}>
                            <BigStar />
                        </View>
                        <View style={{ marginHorizontal: 3.5 }}>
                            <BigStar />
                        </View>
                        <View style={{ marginHorizontal: 3.5 }}>
                            <BigStar />
                        </View>
                        <View style={{ marginHorizontal: 3.5 }}>
                            <BigStar />
                        </View>
                        <View style={{ marginHorizontal: 3.5 }}>
                            <BigStar />
                        </View>
                    </View>
                    <Text
                        style={{
                            textAlign: "center",
                            ...FONTS.Mulish_400Regular,
                            fontSize: 14,
                            color: COLORS.gray,
                            lineHeight: 14 * 1.5,
                            paddingHorizontal: 20,
                            marginBottom: 40,
                        }}
                    >
                        Your comments and suggestions help us improve the
                        service quality better!
                    </Text>
                    <View
                        style={{
                            width: "100%",
                            height: 131,
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: COLORS.lightBlue,
                            marginBottom: 20,
                        }}
                    >
                        <TextInput
                            style={{
                                width: "100%",
                                height: "100%",
                                paddingHorizontal: 30,
                                paddingTop: 23,
                                paddingBottom: 23,
                            }}
                            placeholder="Enter your comment"
                            textAlignVertical="top"
                        />
                        <View
                            style={{
                                position: "absolute",
                                top: -10,
                                left: 20,
                                paddingHorizontal: 10,
                                backgroundColor: COLORS.white,
                            }}
                        >
                            <Text
                                style={{
                                    color: COLORS.gray,
                                    fontFamily: "Mulish_600SemiBold",
                                    fontSize: 12,
                                    textTransform: "uppercase",
                                }}
                            >
                                comment
                            </Text>
                        </View>
                    </View>
                    <Button
                        text="submit"
                        backgroundColor={{ color: COLORS.black }}
                        onPress={() => navigation.navigate("Reviews")}
                        containerStyle={{ marginBottom: 30 }}
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
