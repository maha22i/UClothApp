import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    KeyboardAvoidingView,
    TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
    TopNav,
    Button,
    CheckoutCategory,
    CartItem,
    CommentInput,
} from "../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS, CART } from "../constants";

export default function Checkout() {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <TopNav
                text="Checkout"
                back={true}
                backOnPress={() => navigation.goBack()}
                containerStyle={{
                    borderBottomWidth: 1,
                    borderColor: COLORS.lightBlue,
                }}
            />
        );
    }

    function renderContent() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingHorizontal: 20,
                            marginTop: 30,
                            paddingBottom: 10,
                            borderBottomWidth: 4,
                            borderColor: COLORS.lightBlue,
                        }}
                    >
                        <Text style={{ ...FONTS.H4, color: COLORS.black }}>
                            My order
                        </Text>
                        <Text style={{ ...FONTS.H4, color: COLORS.black }}>
                            $41.69
                        </Text>
                    </View>
                    <View
                        style={{
                            paddingVertical: 20,
                            paddingHorizontal: 20,
                            backgroundColor: "#F4F7FC",
                            borderBottomWidth: 4,
                            borderColor: COLORS.lightBlue,
                        }}
                    >
                        {CART.map((item, index) => {
                            return (
                                <View key={item.id}>
                                    <CartItem
                                        name={item.name}
                                        newPrice={item.newPrice}
                                        quantity={item.quantity}
                                        size={item.size}
                                        color={item.color}
                                        cartList={true}
                                    />
                                </View>
                            );
                        })}
                        <CartItem discount={true} delivery={true} />
                    </View>
                    <CheckoutCategory
                        heading={"Shipping details"}
                        details={"8000 S Kirkland Ave, Chicago, IL 6065..."}
                        onPress={() => navigation.navigate("ShippingDetails")}
                    />
                    <CheckoutCategory
                        heading={"Payment method"}
                        details={"7741 ******** 6644"}
                        onPress={() => navigation.navigate("SelectPayment")}
                    />
                    <CommentInput
                        containerStyle={{
                            marginVertical: 40,
                            paddingHorizontal: 20,
                        }}
                    />

                    <Button
                        text="Confirm order"
                        containerStyle={{
                            marginBottom: 40,
                            paddingHorizontal: 20,
                        }}
                        onPress={() => navigation.navigate("OrderSuccess")}
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
