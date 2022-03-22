import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";

import { COLORS, FONTS, SIZES } from "../constants";

import Back from "../components/svg/Back";
import Bag from "../components/svg/Bag";
import MenuBtn from "../components/svg/MenuBtn";
import ManeroLogo from "../components/svg/ManeroLogo";
import Search from "../components/svg/Search";

import MenuModal from "./MenuModal";

import { useNavigation } from "@react-navigation/native";

export default function TopNav({
    text,
    containerStyle,
    bag,
    quantity = 41.69,
    menu,
    backOnPress,
    logo,
    search,
    back,
}) {
    const navigation = useNavigation();

    const [showModal, setShowModal] = useState(false);

    function renderModal() {
        return (
            <MenuModal
                isVisible={showModal}
                onBackdropPress={() => setShowModal(false)}
                onPress={() => {
                    setShowModal(false);
                    navigation.navigate("TrackYourOrder");
                }}
            />
        );
    }

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: 42,
                ...containerStyle,
            }}
        >
            {back && (
                <View
                    style={{
                        position: "absolute",
                        left: 0,
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            paddingHorizontal: 20,
                            paddingVertical: 12,
                            // backgroundColor: "red",
                        }}
                        onPress={backOnPress}
                    >
                        <Back color={COLORS.black} />
                    </TouchableOpacity>
                </View>
            )}
            {menu && (
                <View
                    style={{
                        position: "absolute",
                        left: 0,
                        alignItems: "center",
                        paddingLeft: 20,
                    }}
                >
                    <TouchableOpacity onPress={() => setShowModal(true)}>
                        <MenuBtn />
                    </TouchableOpacity>
                </View>
            )}
            {text && (
                <Text
                    style={{
                        ...FONTS.H4,
                        textAlign: "center",
                        color: COLORS.black,
                        textTransform: "capitalize",
                    }}
                >
                    {text}
                </Text>
            )}
            {search && (
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        width: SIZES.width - 200,
                    }}
                >
                    <View style={{ marginRight: 7 }}>
                        <Search />
                    </View>

                    <TextInput
                        placeholder="Search"
                        style={{ height: "100%", width: "100%" }}
                    />
                </View>
            )}
            {logo && (
                <View style={{ top: -3 }}>
                    <ManeroLogo />
                </View>
            )}

            {bag && (
                <View
                    style={{
                        position: "absolute",
                        right: 0,
                        paddingRight: 20,
                    }}
                >
                    <TouchableOpacity
                        style={{ paddingLeft: 20, flexDirection: "row" }}
                        onPress={() => console.log("Go to cart")}
                    >
                        <Bag />
                        {quantity > 0 && (
                            <View
                                style={{
                                    position: "absolute",
                                    right: 15,
                                    bottom: -3,
                                    backgroundColor: COLORS.carrot,
                                    borderRadius: 30,
                                    zIndex: 2,
                                }}
                            >
                                <Text
                                    style={{
                                        color: COLORS.white,
                                        fontFamily: "Mulish_700Bold",
                                        fontSize: 10,
                                        paddingHorizontal: 4,
                                        paddingVertical: 3,
                                    }}
                                >
                                    ${quantity}
                                </Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </View>
            )}
            {renderModal()}
        </View>
    );
}
