import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";

import { TopNav, Heading, Heart, Bag, Rating, Like } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";

const CATEGORIES = [
    {
        id: "1",
        category: "Men",
        image: require("../../images/icons/06.png"),
    },
    {
        id: "2",
        category: "woMen",
        image: require("../../images/icons/06.png"),
    },
    {
        id: "3",
        category: "kids",
        image: require("../../images/icons/06.png"),
    },
    {
        id: "4",
        category: "Sport",
        image: require("../../images/icons/06.png"),
    },
    {
        id: "5",
        category: "accessories",
        image: require("../../images/icons/06.png"),
    },
];

const FEATURED_PRODUCTS = [
    {
        id: "1",
        name: "Summer dress",
        price: "29.95",
        discount: "50% off",
        rating: "3.0",
        sale: false,
        like: false,
        image: require("../../images/products/08.png"),
    },
    {
        id: "2",
        name: "Shoulder bag",
        oldPrice: "38.00",
        price: "29.95",
        discount: "50% off",
        rating: "3.0",
        sale: true,
        like: true,
        image: require("../../images/products/09.png"),
    },
    {
        id: "3",
        name: "Denim shorts",
        price: "29.95",
        discount: "50% off",
        rating: "3.0",
        sale: false,
        like: false,
        image: require("../../images/products/10.png"),
    },
    {
        id: "4",
        name: "Denim shorts",
        price: "29.95",
        discount: "50% off",
        rating: "3.0",
        sale: false,
        like: false,
        image: require("../../images/products/10.png"),
    },
];

const BEST_SELLERS = [
    {
        id: "1",
        name: "Hand bag",
        image: require("../../images/products/07.png"),
        sale: true,
        like: false,
        price: "24.95",
        rating: "3",
    },
    {
        id: "2",
        name: "T-shirt",
        image: require("../../images/products/07.png"),
        sale: true,
        like: true,
        price: "12.95",
        rating: "3",
    },
    {
        id: "3",
        name: "Summer dress",
        image: require("../../images/products/07.png"),
        sale: true,
        like: false,
        price: "15.98",
        oldPrice: "36.00",
        rating: "3",
    },
];

export default function HomeTwo() {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <TopNav
                menu={true}
                logo={true}
                containerStyle={{
                    borderBottomWidth: 1,
                    borderColor: COLORS.lightBlue,
                }}
                bag={true}
            />
        );
    }

    function renderCategories() {
        return (
            <ScrollView
                horizontal={true}
                contentContainerStyle={{
                    paddingLeft: 20,
                    marginTop: 20,
                    marginBottom: 30,
                }}
                showsHorizontalScrollIndicator={false}
            >
                {CATEGORIES.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={item.id}
                            style={{ marginRight: 14 }}
                        >
                            <Image
                                source={item.image}
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 35,
                                    marginBottom: 6,
                                }}
                            />
                            <Text
                                style={{
                                    textAlign: "center",
                                    ...FONTS.Mulish_600SemiBold,
                                    fontSize: 14,
                                    color: COLORS.black,
                                    lineHeight: 14 * 1.2,
                                    textTransform: "capitalize",
                                }}
                            >
                                {item.category}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        );
    }

    function renderBanner() {
        return (
            <TouchableOpacity
                style={{ paddingHorizontal: 20, marginBottom: 40 }}
                onPress={() => navigation.navigate("Shop")}
            >
                <ImageBackground
                    style={{
                        width: "100%",
                        height: 150,
                        alignItems: "flex-end",
                    }}
                    source={require("../../images/banner/02.png")}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "space-between",
                            paddingHorizontal: 20,
                            paddingVertical: 30,
                        }}
                    >
                        <Text style={{ ...FONTS.H2, color: COLORS.white }}>
                            Take 50% off!
                        </Text>
                        <View
                            style={{
                                paddingHorizontal: 34.5,
                                paddingVertical: 14,
                                backgroundColor: COLORS.white,
                                alignSelf: "flex-start",
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Mulish_600SemiBold",
                                    fontSize: 14,
                                    textTransform: "uppercase",
                                    color: COLORS.black,
                                }}
                            >
                                shop now
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    }

    function addToCart(name) {
        return showMessage({
            message: "Success",
            description: `${name} is added to the cart.`,
            type: "success",
        });
    }

    function renderFeaturedProducts() {
        return (
            <View>
                <Heading
                    text="Featured products"
                    containerStyle={{ marginBottom: 16, paddingHorizontal: 20 }}
                    onPress={() => navigation.navigate("Shop")}
                />
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        paddingHorizontal: 20,
                    }}
                >
                    {FEATURED_PRODUCTS.map((item, index) => {
                        return (
                            <View
                                key={item.id}
                                style={{
                                    width: SIZES.width * 0.533 - 40,
                                    marginBottom: 20,
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("Product")
                                    }
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
                                                onPress={() =>
                                                    addToCart(item.name)
                                                }
                                            >
                                                <Bag />
                                            </TouchableOpacity>
                                        </View>
                                        {item.sale && (
                                            <Text
                                                style={{
                                                    paddingHorizontal: 6,
                                                    backgroundColor:
                                                        COLORS.green,
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
                                        {item.oldPrice && `$` + item.oldPrice}
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
                        );
                    })}
                </View>
                <View
                    style={{
                        width: "100%",
                        height: 1,
                        backgroundColor: COLORS.lightBlue,
                    }}
                />
            </View>
        );
    }

    function bestSellers() {
        return (
            <View>
                <Heading
                    text="Best sellers"
                    onPress={() => navigation.navigate("Shop")}
                    containerStyle={{
                        paddingHorizontal: 20,
                        marginBottom: 16,
                        marginTop: 30,
                    }}
                />
                <View style={{ paddingHorizontal: 20 }}>
                    {BEST_SELLERS.map((item, index, array) => {
                        return (
                            <View key={item.id} style={{ marginBottom: 14 }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                    }}
                                >
                                    <Image
                                        source={item.image}
                                        style={{
                                            width: 100,
                                            height: 100,
                                            marginRight: 14,
                                        }}
                                    />
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
                                                marginBottom: 10,
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
                                                    marginRight:
                                                        item.oldPrice && 4,
                                                }}
                                            >
                                                {item.oldPrice &&
                                                    `$` + item.oldPrice}
                                            </Text>
                                            <Text
                                                style={{
                                                    ...FONTS.Mulish_600SemiBold,
                                                    fontSize: 14,
                                                    color: item.oldPrice
                                                        ? COLORS.carrot
                                                        : COLORS.black,
                                                    lineHeight: 14 * 1.5,
                                                }}
                                            >
                                                {item.price}
                                            </Text>
                                        </View>

                                        <Rating rating={3} quantity={3} />
                                    </View>
                                    <TouchableOpacity>
                                        <Like
                                            strokeColor={
                                                item.like
                                                    ? COLORS.carrot
                                                    : COLORS.gray
                                            }
                                            fillColor={
                                                item.like
                                                    ? COLORS.carrot
                                                    : COLORS.transparent
                                            }
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    }

    function renderBannerTwo() {
        return (
            <TouchableOpacity
                style={{ paddingHorizontal: 20 }}
                onPress={() => navigation.navigate("Shop")}
            >
                <Image
                    source={require("../../images/banner/03.png")}
                    style={{
                        width: "100%",
                        height: 70,
                        marginBottom: 20,
                        marginTop: 26,
                    }}
                />
            </TouchableOpacity>
        );
    }

    function renderContent() {
        return (
            <ScrollView>
                {renderCategories()}
                {renderBanner()}
                {renderFeaturedProducts()}
                {bestSellers()}
                {renderBannerTwo()}
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
