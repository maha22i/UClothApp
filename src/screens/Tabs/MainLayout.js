import { View, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

import { COLORS } from "../../constants";

import Home from "../../screens/Tabs/Home";
import Search from "../../screens/Tabs/Search";
import Order from "../../screens/Tabs/Order";
import Wishlist from "../../screens/Tabs/Wishlist";
import Profile from "../../screens/Tabs/Profile";

import { ANDROIDSAFEAREAVIEW, SIZES } from "../../constants";

const HomeTab = ({ strokeColor }) => (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
        <G clipPath="url(#a)">
            <Path
                d="m23.4 10.392-.002-.002L13.608.6a2.194 2.194 0 0 0-1.562-.647c-.59 0-1.145.23-1.563.647L.698 10.385a2.212 2.212 0 0 0-.006 3.13 2.197 2.197 0 0 0 1.535.648h.39v7.204a2.589 2.589 0 0 0 2.586 2.586h3.83a.703.703 0 0 0 .703-.703v-5.648c0-.651.53-1.18 1.18-1.18h2.26c.65 0 1.179.529 1.179 1.18v5.648c0 .388.315.703.703.703h3.83a2.589 2.589 0 0 0 2.586-2.586v-7.204h.362a2.213 2.213 0 0 0 1.564-3.77Zm-.996 2.13a.798.798 0 0 1-.568.235h-1.065a.703.703 0 0 0-.703.703v7.907c0 .65-.53 1.18-1.18 1.18h-3.127v-4.945a2.589 2.589 0 0 0-2.586-2.586h-2.259a2.59 2.59 0 0 0-2.586 2.586v4.945H5.203c-.65 0-1.18-.53-1.18-1.18V13.46a.703.703 0 0 0-.703-.703H2.273a.797.797 0 0 1-.586-.236.804.804 0 0 1 0-1.136h.001l9.79-9.79a.797.797 0 0 1 .568-.236c.214 0 .416.084.568.236l9.787 9.787.005.004a.805.805 0 0 1-.002 1.135Z"
                fill={strokeColor}
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);

const SearchTab = ({ strokeColor = "red" }) => (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 3.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5ZM2.25 11a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0Z"
            fill={strokeColor}
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.943 15.943a1 1 0 0 1 1.414 0l4.35 4.35a1 1 0 0 1-1.414 1.414l-4.35-4.35a1 1 0 0 1 0-1.414Z"
            fill={strokeColor}
        />
    </Svg>
);

const BagTab = ({ strokeColor }) => (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
            d="M20.774 20.729 19.498 6.683A.752.752 0 0 0 18.75 6H16.5V4.5a4.475 4.475 0 0 0-1.315-3.186A4.475 4.475 0 0 0 12 0a4.506 4.506 0 0 0-4.5 4.5V6H5.25a.749.749 0 0 0-.747.683L3.226 20.729a3.007 3.007 0 0 0 .772 2.294A3.005 3.005 0 0 0 6.214 24h11.572c.842 0 1.649-.355 2.216-.977a3.013 3.013 0 0 0 .773-2.294ZM9 4.5c0-1.655 1.346-3 3-3a2.988 2.988 0 0 1 3 3V6H9V4.5Zm9.894 17.512a1.489 1.489 0 0 1-1.108.488H6.214c-.426 0-.82-.174-1.107-.489a1.48 1.48 0 0 1-.386-1.148L5.935 7.5h1.564v2.25a.75.75 0 0 0 1.5 0V7.5h6v2.25a.75.75 0 0 0 1.5 0V7.5h1.565l1.215 13.365c.039.425-.098.833-.386 1.148Z"
            fill={strokeColor}
        />
    </Svg>
);

const FavoriteTab = ({ strokeColor }) => (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0Z"
            stroke={strokeColor}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

const UserTab = ({ strokeColor }) => (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
        <G clipPath="url(#a)">
            <Path
                d="M20.485 3.515A11.922 11.922 0 0 0 12 0a11.921 11.921 0 0 0-8.485 3.515A11.921 11.921 0 0 0 0 12c0 3.205 1.248 6.219 3.515 8.485A11.921 11.921 0 0 0 12 24c3.205 0 6.219-1.248 8.485-3.515A11.921 11.921 0 0 0 24 12c0-3.205-1.248-6.219-3.515-8.485ZM6.015 20.737A6.059 6.059 0 0 1 12 15.716a6.059 6.059 0 0 1 5.984 5.02A10.534 10.534 0 0 1 12 22.595c-2.219 0-4.28-.687-5.984-1.857Zm2.17-10.243A3.82 3.82 0 0 1 12 6.678a3.82 3.82 0 0 1 3.816 3.816A3.82 3.82 0 0 1 12 14.309a3.82 3.82 0 0 1-3.816-3.815Zm11.017 9.268a7.474 7.474 0 0 0-2.184-3.52 7.476 7.476 0 0 0-2.173-1.372 5.221 5.221 0 0 0 2.377-4.376A5.228 5.228 0 0 0 12 5.272a5.228 5.228 0 0 0-5.222 5.222c0 1.83.947 3.444 2.377 4.376a7.477 7.477 0 0 0-2.173 1.372 7.476 7.476 0 0 0-2.184 3.52A10.567 10.567 0 0 1 1.406 12C1.406 6.159 6.16 1.406 12 1.406c5.841 0 10.594 4.753 10.594 10.594 0 3.063-1.307 5.826-3.392 7.762Z"
                fill={strokeColor}
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default function MainLayout() {
    const [selectScreen, setSelectScreen] = useState(1);

    const TABS = [
        {
            id: "1",
            screen: "Home",
            icon:
                selectScreen == 1 ? (
                    <HomeTab strokeColor={COLORS.black} />
                ) : (
                    <HomeTab strokeColor={COLORS.gray} />
                ),
        },
        {
            id: "2",
            screen: "Search",
            icon:
                selectScreen == 2 ? (
                    <SearchTab strokeColor={COLORS.black} />
                ) : (
                    <SearchTab strokeColor={COLORS.gray} />
                ),
        },
        {
            id: "3",
            screen: "Order",
            icon:
                selectScreen == 3 ? (
                    <BagTab strokeColor={COLORS.black} />
                ) : (
                    <BagTab strokeColor={COLORS.gray} />
                ),
        },
        {
            id: "4",
            screen: "Profile",
            icon:
                selectScreen == 4 ? (
                    <FavoriteTab strokeColor={COLORS.black} />
                ) : (
                    <FavoriteTab strokeColor={COLORS.gray} />
                ),
        },
        {
            id: "5",
            screen: "Profile",
            icon:
                selectScreen == 5 ? (
                    <UserTab strokeColor={COLORS.black} />
                ) : (
                    <UserTab strokeColor={COLORS.gray} />
                ),
        },
    ];

    return (
        <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
            {selectScreen == 1 && <Home />}
            {selectScreen == 2 && <Search />}
            {selectScreen == 3 && <Order />}
            {selectScreen == 4 && <Wishlist />}
            {selectScreen == 5 && <Profile />}

            <View
                style={{
                    width: SIZES.width,
                    height: 65,
                    backgroundColor: COLORS.white,
                    borderTopWidth: 1,
                    borderTopColor: COLORS.lightBlue,
                    paddingHorizontal: 41,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {TABS.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.5}
                        onPress={() => setSelectScreen(item.id)}
                    >
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                width: 40,
                                height: 40,
                                backgroundColor:
                                    selectScreen == item.id
                                        ? COLORS.lightBlue
                                        : COLORS.transparent,
                                borderRadius: 20,
                            }}
                        >
                            {item.icon}
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
}
