import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import { TopNav, Rating } from "../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../constants";

const COMMENTS = [
    {
        id: "1",
        name: "Cameron Williamson",
        photo: require("../images/icons/02.png"),
        date: "23 Jan 2022",
        comment:
            "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
        rating: 3,
    },
    {
        id: "2",
        name: "Cameron Williamson",
        photo: require("../images/icons/03.png"),
        date: "23 Jan 2022",
        comment:
            "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
        rating: 3,
    },
    {
        id: "3",
        name: "Cameron Williamson",
        photo: require("../images/icons/04.png"),
        date: "23 Jan 2022",
        comment:
            "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
        rating: 3,
    },
    {
        id: "4",
        name: "Cameron Williamson",
        photo: require("../images/icons/05.png"),
        date: "23 Jan 2022",
        comment:
            "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
        rating: 3,
    },
];

export default function Reviews() {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <TopNav
                text="Reviews"
                navigation={true}
                backOnPress={() => navigation.goBack()}
                back={true}
            />
        );
    }

    function renderContent() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                {COMMENTS.map((item, index, array) => {
                    return (
                        <View
                            key={item.id}
                            style={{
                                width: "100%",
                                paddingVertical: 20,
                                borderColor: COLORS.lightBlue,
                                borderBottomWidth:
                                    array.length - 1 === index ? 0 : 1,
                                paddingHorizontal: 20,
                                flexDirection: "row",
                            }}
                        >
                            <Image
                                source={item.photo}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                    marginRight: 14,
                                }}
                            />
                            <View style={{ flex: 1 }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...FONTS.H5,
                                            color: COLORS.black,
                                            lineHeight: 16 * 1.2,
                                            marginBottom: 6,
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                    <Rating rating={item.rating} />
                                </View>
                                <Text
                                    style={{
                                        ...FONTS.Mulish_400Regular,
                                        fontSize: 10,
                                        color: COLORS.gray,
                                        lineHeight: 10 * 1.5,
                                        marginBottom: 10,
                                    }}
                                >
                                    {item.date}
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.Mulish_400Regular,
                                        fontSize: 14,
                                        lineHeight: 14 * 1.5,
                                    }}
                                >
                                    {item.comment}
                                </Text>
                            </View>
                        </View>
                    );
                })}
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
