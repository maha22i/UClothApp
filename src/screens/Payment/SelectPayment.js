import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { TopNav, Select } from "../../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../../constants";

const CREDIT_CARDS = [
    {
        id: "1",
        number: "7741 ******** 6644",
    },
    {
        id: "2",
        number: "7674 ******** 1884",
    },
];

const PAYMENT_METHOD = [
    {
        id: "1",
        method: "Apple Pay",
    },
    {
        id: "2",
        method: "Pay Pal",
    },
    {
        id: "3",
        method: "Cash",
    },
];

export default function PaymentMethod() {
    const navigation = useNavigation();

    const [selectCreditCard, setSelectCreditCard] = useState(1);
    const [selectPayment, setSelectPayment] = useState(null);

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
            <ScrollView>
                <View
                    style={{
                        paddingHorizontal: 20,
                        paddingTop: 20,
                        paddingBottom: 14,
                    }}
                >
                    <Text style={{ ...FONTS.H4, color: COLORS.black }}>
                        Credit cards
                    </Text>
                </View>
                <View
                    style={{
                        borderColor: COLORS.lightBlue,
                        borderTopWidth: 4,
                        borderBottomWidth: 4,
                    }}
                >
                    {CREDIT_CARDS.map((item, index) => (
                        <View
                            key={item.id}
                            style={{
                                backgroundColor: COLORS.lightBlueTwo,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    paddingHorizontal: 20,
                                    paddingVertical: 20,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                                onPress={() => {
                                    setSelectCreditCard(index),
                                        setSelectPayment(null);
                                }}
                            >
                                <Text
                                    style={{
                                        ...FONTS.Mulish_400Regular,
                                        fontSize: 16,
                                        color: COLORS.gray,
                                    }}
                                >
                                    {item.number}
                                </Text>
                                <Select
                                    isSelect={
                                        selectCreditCard == index ? true : false
                                    }
                                />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                {PAYMENT_METHOD.map((item, index) => (
                    <TouchableOpacity
                        key={item.id}
                        style={{
                            paddingVertical: 24,
                            paddingHorizontal: 20,
                            borderBottomColor: COLORS.lightBlue,
                            borderBottomWidth: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                        onPress={() => {
                            setSelectPayment(index), setSelectCreditCard(null);
                        }}
                    >
                        <Text style={{ ...FONTS.H5, color: COLORS.black }}>
                            {item.method}
                        </Text>
                        <Select
                            isSelect={selectPayment == index ? true : false}
                        />
                    </TouchableOpacity>
                ))}
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
