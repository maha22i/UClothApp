import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    StyleSheet,
    Image,
} from "react-native";
import React, { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";

import {
    TopNav,
    ProductLike,
    Rating,
    Button,
    Plus,
    Minus,
    ViewAll,
} from "../components";
import { ANDROIDSAFEAREAVIEW, SIZES, COLORS, FONTS } from "../constants";

const SLIDE = [
    {
        id: "1",
        description: "Welcome To Manero!",
        discount: "50% off",
        image: require("../images/slide/01.png"),
    },
    {
        id: "2",
        description: "Welcome To Manero!",
        discount: "50% off",
        image: require("../images/slide/02.png"),
    },
    {
        id: "3",
        description: "Welcome To Manero!",
        discount: "50% off",
        image: require("../images/slide/03.png"),
    },
];

const PRODUCT_SIZES = [
    {
        id: "1",
        size: "xs",
    },
    {
        id: "2",
        size: "s",
    },
    {
        id: "3",
        size: "m",
    },
    {
        id: "4",
        size: "l",
    },
    {
        id: "5",
        size: "xl",
    },
    {
        id: "6",
        size: "xxl",
    },
];

const PRODUCT_COLORS = [
    {
        id: "1",
        color: "#FF6262",
    },
    {
        id: "2",
        color: "#63C7FF",
    },
    {
        id: "3",
        color: "#F8E7CD",
    },
    {
        id: "4",
        color: "#323858",
    },
    {
        id: "5",
        color: "#111111",
    },
];

const PRODUCT_COMMENTS = [
    {
        id: "1",
        name: "Annette Black",
        photo: require("../images/icons/02.png"),
        date: "23 Jan 2022",
        comment:
            "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
        rating: 3,
    },
    {
        id: "2",
        name: "Jenny Wilson",
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
        name: "Theresa Webb",
        photo: require("../images/icons/05.png"),
        date: "23 Jan 2022",
        comment:
            "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
        rating: 3,
    },
];

export default function Product() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [productSize, setProductSize] = useState(1);
    const [productColor, setProductColor] = useState(1);
    const [productQuantity, setProductQuantity] = useState(1);
    const [productLike, setProductLike] = useState(false);

    function updateCurrentSlideIndex(e) {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / SIZES.width);
        setCurrentSlideIndex(currentIndex);
    }

    const navigation = useNavigation();

    function renderHeader() {
        return <TopNav logo={true} menu={true} bag={true} goToCart={true} />;
    }

    function renderSlide() {
        function renderDots() {
            return (
                <View>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                        }}
                    >
                        {SLIDE.map((_, index) => {
                            return (
                                <View
                                    key={index}
                                    style={[
                                        styles.dot,
                                        currentSlideIndex == index && {
                                            width: 22,
                                        },
                                    ]}
                                />
                            );
                        })}
                    </View>
                </View>
            );
        }

        return (
            <View style={{ marginTop: 17 }}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={updateCurrentSlideIndex}
                >
                    {SLIDE.map((item, index) => (
                        <ImageBackground
                            key={item.id}
                            source={item.image}
                            style={{
                                width: SIZES.width,
                                height: 350,
                                paddingHorizontal: 20,
                                paddingVertical: 25,
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "flex-end",
                                }}
                            >
                                <View
                                    style={{
                                        width: 1,
                                        height: 30,
                                        backgroundColor: COLORS.white,
                                        marginBottom: 20,
                                    }}
                                />
                                <Text
                                    style={{
                                        ...FONTS.H1,
                                        color: COLORS.white,
                                        width: 190,
                                    }}
                                >
                                    {item.description}
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.H1,
                                        color: COLORS.white,
                                        width: 190,
                                    }}
                                >
                                    {item.discount}
                                </Text>
                            </View>
                        </ImageBackground>
                    ))}
                </ScrollView>
                {renderDots()}
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

    function addToCart(name) {
        return showMessage({
            message: "Success",
            description: `${name} is added to the cart.`,
            type: "success",
        });
    }

    function renderProductInfo() {
        return (
            <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.H3,
                            color: COLORS.black,
                        }}
                    >
                        Knitted summer top
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            setProductLike(!productLike);
                        }}
                    >
                        <ProductLike
                            strokeColor={
                                productLike ? COLORS.carrot : COLORS.gray
                            }
                            fillColor={
                                productLike ? COLORS.carrot : COLORS.transparent
                            }
                        />
                    </TouchableOpacity>
                </View>
                <Rating
                    rating={4}
                    quantity={23}
                    containerStyle={{ marginBottom: 10 }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.Mulish_600SemiBold,
                            fontSize: 20,
                            color: COLORS.black,
                        }}
                    >
                        $37.88
                    </Text>
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                            borderRadius: 50,
                            borderWidth: 1,
                            borderColor: COLORS.lightBlue,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 30,
                                height: 30,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingHorizontal: 25,
                                paddingVertical: 22,
                            }}
                            onPress={() =>
                                productQuantity > 1 &&
                                setProductQuantity(productQuantity - 1)
                            }
                        >
                            <Minus strokeColor={COLORS.black} />
                        </TouchableOpacity>
                        <Text
                            style={{
                                fontFamily: "Mulish_600SemiBold",
                                color: COLORS.gray,
                                fontSize: 14,
                                paddingHorizontal: 10,
                            }}
                        >
                            {productQuantity}
                        </Text>
                        <TouchableOpacity
                            style={{
                                width: 30,
                                height: 30,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingHorizontal: 25,
                                paddingVertical: 22,
                            }}
                            onPress={() =>
                                productQuantity > 0 &&
                                setProductQuantity(productQuantity + 1)
                            }
                        >
                            <Plus strokeColor={COLORS.black} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text
                        style={{
                            ...FONTS.H5,
                            color: COLORS.black,
                            marginTop: 20,
                            marginBottom: 14,
                        }}
                    >
                        Size
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 25,
                        }}
                    >
                        {PRODUCT_SIZES.map((item, index) => (
                            <TouchableOpacity
                                key={item.id}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderWidth: 1,
                                    borderColor: COLORS.lightBlue,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 50,
                                    backgroundColor:
                                        productSize == index
                                            ? COLORS.lightBlue
                                            : COLORS.transparent,
                                }}
                                onPress={() => setProductSize(index)}
                            >
                                <Text
                                    style={{
                                        ...FONTS.Mulish_600SemiBold,
                                        fontSize: 12,
                                        textTransform: "uppercase",
                                        color: COLORS.black,
                                    }}
                                >
                                    {item.size}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 30,
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.H5,
                            color: COLORS.black,
                            marginTop: 20,
                            marginBottom: 14,
                            marginRight: 25,
                        }}
                    >
                        Color
                    </Text>

                    {PRODUCT_COLORS.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => setProductColor(index)}
                        >
                            <View
                                style={{
                                    width: 30,
                                    height: 30,
                                    backgroundColor: item.color,
                                    marginHorizontal: 7,
                                    borderRadius: 15,
                                    borderWidth: 4,
                                    borderColor:
                                        productColor == index
                                            ? COLORS.lightBlue
                                            : COLORS.transparent,
                                }}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                <Text
                    style={{
                        ...FONTS.H5,
                        color: COLORS.black,
                        marginBottom: 14,
                    }}
                >
                    Description
                </Text>
                <Text
                    style={{
                        ...FONTS.Mulish_400Regular,
                        fontSize: 16,
                        lineHeight: 16 * 1.7,
                        color: COLORS.gray,
                        marginBottom: 20,
                    }}
                >
                    Amet amet Lorem eu consectetur in deserunt nostrud dolor
                    culpa ad sint amet. Nostrud deserunt consectetur culpa minim
                    mollit veniam aliquip pariatur exercitation ullamco ea
                    voluptate et. Pariatur ipsum mollit magna proident nisi
                    ipsum.
                </Text>
                <Button
                    text="+ ADd to cart"
                    containerStyle={{ marginBottom: 40 }}
                    onPress={() => addToCart("Knitted summer top")}
                />
            </View>
        );
    }

    function renderComments() {
        return (
            <View>
                <View
                    style={{
                        paddingHorizontal: 20,
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ ...FONTS.H3, color: COLORS.black }}>
                        Reviews (23)
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Reviews")}
                    >
                        <ViewAll />
                    </TouchableOpacity>
                </View>
                {PRODUCT_COMMENTS.map((item, index, array) => {
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
                                        color: COLORS.gray,
                                    }}
                                >
                                    {item.comment}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        );
    }

    return (
        <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
            {renderHeader()}
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderSlide()}
                {renderProductInfo()}
                {renderComments()}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    dot: {
        width: 10,
        height: 10,
        marginHorizontal: 5,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: COLORS.black,
        marginVertical: 20,
    },
});
