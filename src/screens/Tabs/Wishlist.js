import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { showMessage } from "react-native-flash-message";

import { TopNav, Rating, Like, InBag } from "../../components";
import { COLORS, FONTS } from "../../constants";

const PRODUCTS = [
    {
        id: "1",
        name: "Summer dress",
        image: require("../../images/products/07.png"),
        sale: false,
        price: "42.89",
        rating: "3",
    },
    {
        id: "2",
        name: "Shoulder bag",
        image: require("../../images/products/07.png"),
        sale: true,
        price: "42.89",
        rating: "3",
    },
    {
        id: "3",
        name: "Summer dress",
        image: require("../../images/products/07.png"),
        sale: true,
        price: "30.00",
        oldPrice: "38.00",
        rating: "3",
    },
    {
        id: "4",
        name: "Hand bag",
        image: require("../../images/products/07.png"),
        sale: false,
        price: "15.98",
        oldPrice: "36.00",
        rating: "3",
    },
    {
        id: "5",
        name: "T-shirt",
        image: require("../../images/products/07.png"),
        sale: false,
        price: "42.89",
        rating: "3",
    },
];

export default function Wishlist() {
    function renderHeader() {
        return <TopNav text="Wishlist" menu={true} bag={true} />;
    }

    function addToCart(name) {
        return showMessage({
            message: "Success",
            description: `${name} is added to the cart.`,
            type: "success",
        });
    }

    function renderContent() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                {PRODUCTS.map((item, index, array) => {
                    return (
                        <View
                            key={item.id}
                            style={{
                                borderBottomWidth:
                                    array.length - 1 === index ? 0 : 1,
                                borderColor: COLORS.lightBlue,
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    paddingVertical: 20,
                                    paddingHorizontal: 20,
                                }}
                            >
                                <View
                                    style={{
                                        width: 100,
                                        height: 100,
                                        marginRight: 14,
                                    }}
                                >
                                    <Image
                                        source={item.image}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            resizeMode: "contain",
                                        }}
                                    />
                                    {item.sale && (
                                        <Text
                                            style={{
                                                paddingHorizontal: 6,
                                                backgroundColor: COLORS.green,
                                                alignSelf: "flex-start",
                                                ...FONTS.Mulish_700Bold,
                                                fontSize: 10,
                                                textTransform: "uppercase",
                                                lineHeight: 10 * 1.7,
                                                color: COLORS.white,
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        >
                                            Sale
                                        </Text>
                                    )}
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            ...FONTS.Mulish_400Regular,
                                            fontSize: 14,
                                            color: COLORS.gray,
                                            lineHeight: 14 * 1.7,
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginBottom: 9,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                textDecorationLine:
                                                    "line-through",
                                                ...FONTS.Mulish_400Regular,
                                                fontSize: 12,
                                                lineHeight: 12 * 1.5,
                                                color: COLORS.gray,
                                                marginRight: 4,
                                            }}
                                        >
                                            {item.oldPrice}
                                        </Text>
                                        <Text
                                            style={{
                                                ...FONTS.Mulish_600SemiBold,
                                                fontSize: 14,
                                                lineHeight: 14 * 1.5,
                                                color: item.oldPrice
                                                    ? COLORS.carrot
                                                    : COLORS.black,
                                            }}
                                        >
                                            ${item.price}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Rating rating={3} quantity={3} />
                                    </View>
                                </View>
                                <View
                                    style={{ justifyContent: "space-between" }}
                                >
                                    <TouchableOpacity>
                                        <Like
                                            strokeColor={COLORS.carrot}
                                            fillColor={COLORS.carrot}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => addToCart(item.name)}
                                    >
                                        <InBag />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            {renderHeader()}
            {renderContent()}
        </View>
    );
}
