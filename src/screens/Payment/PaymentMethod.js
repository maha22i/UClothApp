import React from "react";
import {
    Text,
    SafeAreaView,
    Image,
    ScrollView,
    View,
    TouchableOpacity,
    FlatList,
    ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, ANDROIDSAFEAREAVIEW, FONTS } from "../../constants";
import {
    TopNav,
    AddANewCard,
    PaymentSystem,
    Edit,
    Add,
} from "../../components";

const CREDIT_CARDS = [
    {
        id: "1",
        number: "7741   6588   2123   6644",
        name: "Kristin Watson",
        expirationDate: "12/21",
        logo: require("../../images/logos/visa.png"),
        background: require("../../images/background/card-bg-1.png"),
    },
    {
        id: "2",
        number: "7741   6588   2123   6644",
        name: "Kristin Watson",
        expirationDate: "12/21",
        logo: require("../../images/logos/visa.png"),
        background: require("../../images/background/card-bg-2.png"),
    },
    {
        id: "3",
        number: "7741   6588   2123   6644",
        name: "Kristin Watson",
        expirationDate: "12/21",
        logo: require("../../images/logos/visa.png"),
        background: require("../../images/background/card-bg-3.png"),
    },
];

export default function PaymentMethod() {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <TopNav
                text="Payment method"
                navigation={true}
                back={true}
                containerStyle={{
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.lightBlue,
                }}
                backOnPress={() => navigation.goBack()}
            />
        );
    }

    function renderContent() {
        return (
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 20,
                        marginTop: 20,
                        marginBottom: 14,
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.H5,
                            textTransform: "capitalize",
                            color: COLORS.black,
                        }}
                    >
                        Cards
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("AddNewCard")}
                    >
                        <AddANewCard />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={CREDIT_CARDS}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 20 }}
                    renderItem={({ item, index, array }) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    marginRight: 14,
                                }}
                                activeOpacity={1}
                            >
                                <ImageBackground
                                    source={item.background}
                                    style={{
                                        width: 279,
                                        height: 170,
                                        padding: 20,
                                    }}
                                    imageStyle={{ borderRadius: 10 }}
                                >
                                    <Image
                                        source={item.logo}
                                        style={{
                                            width: 45,
                                            height: 17,
                                            resizeMode: "contain",
                                            marginBottom: 27,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            fontFamily: "Mulish_400Regular",
                                            fontSize: 16,
                                            color: COLORS.white,
                                            flex: 1,
                                        }}
                                    >
                                        {item.number}
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: "white",
                                                fontFamily:
                                                    "Mulish_600SemiBold",
                                                fontSize: 11,
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {item.name}
                                        </Text>
                                        <Text
                                            style={{
                                                color: "white",
                                                fontFamily:
                                                    "Mulish_600SemiBold",
                                                fontSize: 11,
                                            }}
                                        >
                                            EXP.END {item.expirationDate}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        );
                    }}
                />
                <View style={{ marginTop: 10 }}>
                    <PaymentSystem
                        paymentName="Apple Pay"
                        icon={<Edit />}
                        selected={true}
                    />
                    <PaymentSystem
                        paymentName="Pay Pal"
                        icon={<Edit />}
                        selected={true}
                    />
                    <PaymentSystem
                        paymentName="Payoneer"
                        icon={<Add />}
                        onPress={() => navigation.navigate("AddANewCard")}
                    />
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
            {renderHeader()}
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderContent()}
            </ScrollView>
        </SafeAreaView>
    );
}
