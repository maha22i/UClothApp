import React, { useRef, useState } from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    StatusBar,
    KeyboardAvoidingView,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Shadow } from "react-native-shadow-2";

const destination = { latitude: 37.771707, longitude: -122.4053769 };
const GOOGLE_MAPS_APIKEY = "AIzaSyDaG8heb2urT4EICboyOWL_2dcwSOq9ubI";

import { COLORS, LINE, SIZES, SHADOW_PRESET } from "../constants";
import { Back, Call, Button, Select, InputField } from "../components";

import { TopNav, CategoryCheck } from "../components";
import { ANDROIDSAFEAREAVIEW } from "../constants";

import { useNavigation } from "@react-navigation/native";

export default function AddNewAddress() {
    const navigation = useNavigation();

    const [rememberMe, setRememberMe] = useState(false);

    const mapView = useRef();
    const initialRegion = {
        latitude: 25.237604,
        longitude: 55.35744,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    const origin = { latitude: 25.28106, longitude: 55.38622 };
    const destination = { latitude: 25.293511, longitude: 55.40052 };

    function renderHeader() {
        return (
            <TopNav
                text="Add a new address"
                back={true}
                backOnPress={() => navigation.goBack()}
            />
        );
    }

    function renderMap() {
        return (
            <MapView
                ref={mapView}
                style={{ flex: 1 }}
                initialRegion={initialRegion}
                provider={PROVIDER_GOOGLE}
            >
                <Marker coordinate={origin} tracksViewChanges={false} />
                <Marker coordinate={destination} tracksViewChanges={false} />
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    lineDashPattern={[50, 50]}
                    strokeColor="hotpink"
                />
            </MapView>
        );
    }

    function renderContent() {
        return (
            <Shadow
                offset={[0, 0]}
                distance={15}
                startColor={"rgba(6, 38, 100, 0.06)"}
                finalColor={"rgba(6, 38, 100, 0.0)"}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                >
                    <View
                        style={{
                            width: SIZES.width,
                        }}
                    >
                        <ScrollView
                            style={{
                                backgroundColor: COLORS.white,
                                paddingHorizontal: 20,
                            }}
                        >
                            <InputField
                                text="title"
                                placeholder="Mom"
                                containerStyle={{
                                    marginTop: 30,
                                    marginBottom: 32,
                                }}
                            />
                            <InputField
                                text="enter a new address"
                                placeholder="3646 S 58th Ave, Cicero, IL 60804, U..."
                                containerStyle={{
                                    marginBottom: 32,
                                }}
                            />
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    alignItems: "center",
                                    marginBottom: 20,
                                }}
                                onPress={() => {
                                    setRememberMe((rememberMe) => !rememberMe);
                                }}
                            >
                                <View
                                    style={{
                                        width: 18,
                                        height: 18,
                                        borderRadius: 5,
                                        borderWidth: 2,
                                        borderColor: COLORS.lightBlue,
                                        marginRight: 12,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    {rememberMe == true && <CategoryCheck />}
                                </View>
                                <Text
                                    style={{
                                        fontFamily: "Mulish_400Regular",
                                        fontSize: 16,
                                        lineHeight: 16 * 1.7,
                                        color: COLORS.gray,
                                    }}
                                >
                                    Use current location
                                </Text>
                            </TouchableOpacity>
                            <Button
                                text="save address"
                                containerStyle={{ marginBottom: 30 }}
                                onPress={() => navigation.navigate("MyAddress")}
                            />
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </Shadow>
        );
    }

    return (
        <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
            {renderHeader()}
            {renderMap()}
            {renderContent()}
        </SafeAreaView>
    );
}
