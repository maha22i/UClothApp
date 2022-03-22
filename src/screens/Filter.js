import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { useNavigation } from "@react-navigation/native";

import { TopNav, Button, CategoryCheck } from "../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS, SIZES } from "../constants";

const SIZE = [
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

const COLOR = [
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

const CATEGORY = [
    {
        id: "1",
        category: "Sale",
        color: "#69864D",
    },
    {
        id: "2",
        category: "New",
        color: "#CFA93F",
    },
    {
        id: "3",
        category: "Top",
        color: "#864D7D",
    },
];

const TAGS = [
    {
        id: "1",
        tag: "kids",
    },
    {
        id: "2",
        tag: "sport",
    },
    {
        id: "3",
        tag: "dress",
    },
    {
        id: "4",
        tag: "pants",
    },
    {
        id: "5",
        tag: "t-shirt",
    },
    {
        id: "6",
        tag: "hat",
    },
    {
        id: "7",
        tag: "unisex",
    },
    {
        id: "8",
        tag: "bag",
    },
    {
        id: "9",
        tag: "accessories",
    },
    {
        id: "10",
        tag: "shoes",
    },
    {
        id: "11",
        tag: "polo",
    },
];

export default function Filter() {
    const [productSize, setProductSize] = useState(1);
    const [productColor, setProductColor] = useState(1);
    const [productCategory, setProductCategory] = useState(0);
    const [productTag, setProductTag] = useState(1);

    const navigation = useNavigation();

    function renderHeader() {
        return (
            <TopNav
                text="Filter"
                navigation={true}
                back={true}
                backOnPress={() => navigation.goBack()}
            />
        );
    }

    function CustomSliderMarkerLeft() {
        return (
            <View
                style={{
                    width: 20,
                    height: 20,
                    backgroundColor: COLORS.black,
                    borderRadius: 10,
                }}
            />
        );
    }

    function CustomSliderMarkerRight() {
        return (
            <View
                style={{
                    width: 20,
                    height: 20,
                    backgroundColor: COLORS.black,
                    borderRadius: 10,
                }}
            />
        );
    }

    function renderSize() {
        return (
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
                    {SIZE.map((item, index) => (
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
        );
    }

    function renderColor() {
        return (
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

                {COLOR.map((item, index) => (
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
        );
    }

    function renderPrice() {
        return (
            <View>
                <Text
                    style={{
                        ...FONTS.H5,
                        color: COLORS.black,
                        marginTop: 20,
                        marginBottom: 14,
                        marginRight: 25,
                    }}
                >
                    Price
                </Text>
                <MultiSlider
                    values={([300], [1000])}
                    isMarkersSeparated={true}
                    sliderLength={SIZES.width - 40}
                    step={1}
                    selectedStyle={{ backgroundColor: COLORS.black }}
                    trackStyle={{ backgroundColor: COLORS.lightBlue }}
                    customMarkerLeft={(e) => {
                        return <CustomSliderMarkerLeft currentValue={200} />;
                    }}
                    customMarkerRight={(e) => {
                        return <CustomSliderMarkerRight currentValue={1000} />;
                    }}
                    min={0}
                    max={2000}
                    minMarkerOverlapDistance={50}
                />
            </View>
        );
    }

    function renderCategory() {
        return (
            <View
                style={{
                    marginBottom: 40,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                {CATEGORY.map((item, index) => (
                    <TouchableOpacity
                        key={item.id}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 50,
                        }}
                        onPress={() => setProductCategory(index)}
                    >
                        <View
                            style={{
                                width: 18,
                                height: 18,
                                borderWidth: 2,
                                borderColor: COLORS.lightBlue,
                                borderRadius: 5,
                                marginRight: 8,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {productCategory == index && <CategoryCheck />}
                        </View>
                        <Text
                            style={{
                                ...FONTS.Mulish_600SemiBold,
                                fontSize: 10,
                                textTransform: "uppercase",
                                backgroundColor: item.color,
                                paddingHorizontal: 6,
                                paddingVertical: 2,
                            }}
                        >
                            {item.category}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }

    function renderTags() {
        return (
            <View
                style={{
                    marginBottom: 20,
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {TAGS.map((item, index) => (
                    <TouchableOpacity
                        style={{
                            marginBottom: 8,
                            marginRight: 8,
                            borderRadius: 50,
                            borderColor: COLORS.lightBlue,
                            borderWidth: 1,
                            backgroundColor:
                                productTag == index
                                    ? COLORS.lightBlue
                                    : COLORS.transparent,
                        }}
                        key={item.id}
                        onPress={() => setProductTag(index)}
                    >
                        <Text
                            style={{
                                paddingHorizontal: 20,
                                paddingVertical: 6,
                                textTransform: "uppercase",
                                fontSize: 12,
                                ...FONTS.Mulish_600SemiBold,
                                color: COLORS.black,
                            }}
                        >
                            {item.tag}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }

    function renderContent() {
        return (
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingBottom: 40,
                }}
            >
                {renderSize()}
                {renderColor()}
                {renderPrice()}
                {renderCategory()}
                {renderTags()}
                <Button
                    text="apply filters"
                    onPress={() => navigation.navigate("Shop")}
                />
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
