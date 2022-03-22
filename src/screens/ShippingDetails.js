import {
    View,
    Text,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from "react-native";
import React, { useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

const GOOGLE_MAPS_APIKEY = "AIzaSyDaG8heb2urT4EICboyOWL_2dcwSOq9ubI";

import { TopNav, Select, InputField } from "../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../constants";

const ADDRESS = [
    {
        id: "1",
        type: "Home",
        address: "8000 S Kirkland Ave, Chicago...",
    },
    {
        id: "2",
        type: "Work",
        address: "8000 S Kirkland Ave, Chicago...",
    },
    {
        id: "3",
        type: "Other",
        address: "8000 S Kirkland Ave, Chicago...",
    },
];

export default function ShippingDetails() {
    const navigation = useNavigation();

    const [selectCreditCard, setSelectCreditCard] = useState(1);
    const [selectAddress, setSelectedAddress] = useState(false);

    function renderHeader() {
        return (
            <TopNav
                text="Shipping details"
                back={true}
                backOnPress={() => navigation.goBack()}
            />
        );
    }

    function renderMap() {
        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider={PROVIDER_GOOGLE}
            >
                <Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    title={"ddddssss"}
                    description={"ddddssss"}
                />
            </MapView>
        );
    }

    function renderDetails() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView showsHorizontalScrollIndicator={false}>
                    {ADDRESS.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={item.id}
                                style={{
                                    paddingHorizontal: 20,
                                    paddingTop: 20,
                                    paddingBottom: 10,
                                    borderBottomWidth: 1,
                                    borderBottomColor: COLORS.lightBlue,
                                    justifyContent: "space-between",
                                    flexDirection: "row",
                                }}
                                onPress={() => {
                                    setSelectedAddress(false);
                                    setSelectCreditCard(index);
                                }}
                            >
                                <View>
                                    <Text
                                        style={{
                                            ...FONTS.H5,
                                            color: COLORS.black,
                                            marginBottom: 4,
                                        }}
                                    >
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
                                <Select
                                    isSelect={
                                        selectCreditCard == index ? true : false
                                    }
                                    containerStyle={{ marginTop: 5 }}
                                />
                            </TouchableOpacity>
                        );
                    })}
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            marginBottom: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 20,
                        }}
                        onPress={() => {
                            setSelectCreditCard(null);
                            setSelectedAddress(true);
                        }}
                    >
                        <View
                            style={{
                                paddingHorizontal: 30,
                                height: 50,
                                flex: 1,
                                borderWidth: 1,
                                borderColor: COLORS.lightBlue,
                                borderRadius: 50,
                                justifyContent: "center",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <TextInput
                                placeholder="3646 S 58th Ave, Cicero, IL 608..."
                                style={{
                                    flex: 1,
                                    height: "100%",
                                    width: "100%",
                                }}
                                placeholderTextColor={COLORS.black}
                            />
                            <View
                                style={{
                                    position: "absolute",
                                    top: -8,
                                    left: 20,
                                    paddingHorizontal: 10,
                                    backgroundColor: COLORS.white,
                                }}
                            >
                                <Text
                                    style={{
                                        color: COLORS.gray,
                                        fontFamily: "Mulish_600SemiBold",
                                        fontSize: 12,
                                        textTransform: "uppercase",
                                    }}
                                >
                                    enter an address
                                </Text>
                            </View>
                        </View>
                        <Select
                            isSelect={selectAddress ? true : false}
                            containerStyle={{ marginLeft: 10 }}
                        />
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    return (
        <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
            {renderHeader()}
            {renderMap()}
            {renderDetails()}
        </SafeAreaView>
    );
}
