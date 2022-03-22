import { Dimensions } from "react-native";
import { Platform, StatusBar } from "react-native";
const { width, height } = Dimensions.get("window");

const COLORS = {
    black: "#111111",
    white: "#FFFFFF",
    gray: "#626262",
    carrot: "#F4303C",
    golden: "#FFBE00",
    green: "#69864D",
    lightBlue: "#DBE3F5",
    lightBlueTwo: "#F4F7FC",
    transparent: "rgba(0, 0, 0, 0)",
    transparentBlack: "rgba(0, 0, 0, 0.7)",
};

const FONTS = {
    H1: {
        fontFamily: "Mulish_700Bold",
        fontSize: 32,
        textTransform: "capitalize",
        lineHeight: 32 * 1.2,
    },
    H2: {
        fontFamily: "Mulish_700Bold",
        fontSize: 22,
        lineHeight: 22 * 1.2,
    },
    H3: {
        fontFamily: "Mulish_700Bold",
        fontSize: 20,
        lineHeight: 20 * 1.2,
    },
    H4: {
        fontFamily: "Mulish_600SemiBold",
        fontSize: 18,
        lineHeight: 18 * 1.2,
    },
    H5: {
        fontFamily: "Mulish_600SemiBold",
        fontSize: 16,
        lineHeight: 16 * 1.2,
    },
    Mulish_400Regular: {
        fontFamily: "Mulish_400Regular",
    },
    Mulish_600SemiBold: {
        fontFamily: "Mulish_600SemiBold",
    },
    Mulish_700Bold: {
        fontFamily: "Mulish_700Bold",
    },
};

const ANDROIDSAFEAREAVIEW = {
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
};

const CONTAINER = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
};

const SIZES = {
    width,
    height,
};

export { COLORS, FONTS, SIZES, CONTAINER, ANDROIDSAFEAREAVIEW };
