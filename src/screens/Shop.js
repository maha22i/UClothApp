import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import React from "react";
import { showMessage } from "react-native-flash-message";

import {
    TopNav,
    Rating,
    Filter,
    SortingElement,
    Heart,
    Bag,
} from "../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS, SIZES } from "../constants";

import { useNavigation } from "@react-navigation/native";

const PRODUCTS = [
    {
        id: "1",
        name: "Purple sneakers",
        price: "22.87",
        rating: "3.0",
        sale: false,
        like: false,
        image: require("../images/products/08.png"),
    },
    {
        id: "2",
        name: "Warm hat",
        price: "6.93",
        rating: "3.0",
        sale: false,
        like: false,
        image: require("../images/products/09.png"),
    },
    {
        id: "3",
        name: "Summer dress",
        price: "15.98",
        oldPrice: "$35",
        rating: "3.0",
        sale: true,
        like: true,
        image: require("../images/products/10.png"),
    },
    {
        id: "4",
        name: "Denim shorts",
        price: "54.96",
        rating: "3.0",
        image: require("../images/products/11.png"),
    },
    {
        id: "5",
        name: "Summer top",
        price: "22.87",
        rating: "3.0",
        sale: false,
        like: false,
        image: require("../images/products/12.png"),
    },
];

export default function Shop() {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <TopNav
                text="Best sellers"
                navigation="true"
                bag={true}
                back={true}
                backOnPress={() => navigation.goBack()}
            />
        );
    }

    function renderSettings() {
        return (
            <View
                style={{
                    marginTop: 12,
                    marginBottom: 17,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center" }}
                    onPress={() => navigation.navigate("Filter")}
                >
                    <Filter />
                    <Text
                        style={{
                            paddingLeft: 8,
                            ...FONTS.Mulish_400Regular,
                            fontSize: 14,
                            color: COLORS.gray,
                            lineHeight: 14 * 1.7,
                        }}
                    >
                        Filters
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center" }}
                >
                    <Text
                        style={{
                            ...FONTS.Mulish_400Regular,
                            fontSize: 14,
                            color: COLORS.gray,
                            lineHeight: 14 * 1.7,
                            paddingRight: 6,
                        }}
                    >
                        Sorting by
                    </Text>
                    <SortingElement />
                </TouchableOpacity>
            </View>
        );
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
            <View
                style={{
                    paddingHorizontal: 20,
                    flex: 1,
                }}
            >
                {renderSettings()}
                <FlatList
                    data={PRODUCTS}
                    keyExtractor={(item, index) => item.id}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index, separators }) => (
                        <View
                            key={item.key}
                            style={{
                                width: SIZES.width * 0.533 - 40,
                                marginBottom: 20,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Product")}
                            >
                                <ImageBackground
                                    source={item.image}
                                    style={{
                                        width: "100%",
                                        height: 170,
                                        marginBottom: 6,
                                    }}
                                >
                                    <View
                                        style={{
                                            position: "absolute",
                                            right: 0,
                                            top: 0,
                                        }}
                                    >
                                        <TouchableOpacity
                                            style={{
                                                padding: 10,
                                            }}
                                        >
                                            <Heart
                                                fillColor={
                                                    item.like
                                                        ? COLORS.carrot
                                                        : COLORS.transparent
                                                }
                                                strokeColor={
                                                    item.like
                                                        ? COLORS.carrot
                                                        : COLORS.gray
                                                }
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{
                                                padding: 10,
                                            }}
                                            onPress={() => addToCart(item.name)}
                                        >
                                            <Bag />
                                        </TouchableOpacity>
                                    </View>
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
                                            }}
                                        >
                                            Sale
                                        </Text>
                                    )}
                                </ImageBackground>
                            </TouchableOpacity>

                            <Rating
                                rating={item.rating}
                                containerStyle={{ marginBottom: 5 }}
                                quantity={3}
                            />

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
                                }}
                            >
                                <Text
                                    style={{
                                        textDecorationLine: "line-through",
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
                        </View>
                    )}
                    numColumns={2}
                />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
}
