import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import { TopNav, Home, Briefcase, MapPin, Edit, Add } from "../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../constants";

const ADDRESS = [
    {
        id: "1",
        type: "Home",
        address: "8000 S Kirkland Ave, Chicago...",
        icon: <Home />,
    },
    {
        id: "2",
        type: "Work",
        address: "8000 S Kirkland Ave, Chicago...",
        icon: <Briefcase />,
    },
    {
        id: "3",
        type: "Other",
        address: "8000 S Kirkland Ave, Chicago...",
        icon: <MapPin />,
    },
];

export default function MyAddress() {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <TopNav
                text="My address"
                back={true}
                backOnPress={() => navigation.goBack()}
            />
        );
    }

    function renderContent() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ height: 10 }} />
                {ADDRESS.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={item.id}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                borderBottomColor: COLORS.lightBlue,
                                borderBottomWidth: 1,
                            }}
                        >
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                    borderColor: COLORS.lightBlue,
                                    borderWidth: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginRight: 14,
                                }}
                            >
                                {item.icon}
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ ...FONTS.H5, marginBottom: 4 }}>
                                    {item.type}
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.Mulish_400Regular,
                                        fontSize: 14,
                                        color: COLORS.gray,
                                    }}
                                >
                                    {item.address}
                                </Text>
                            </View>
                            <Edit />
                        </TouchableOpacity>
                    );
                })}
                <TouchableOpacity
                    style={{ alignItems: "center", marginTop: 30 }}
                    onPress={() => navigation.navigate("AddNewAddress")}
                >
                    <Add />
                    <Text
                        style={{
                            textAlign: "center",
                            marginTop: 5,
                            ...FONTS.Mulish_400Regular,
                            fontSize: 14,
                            lineHeight: 14 * 1.5,
                        }}
                    >
                        Add a new address
                    </Text>
                </TouchableOpacity>
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
