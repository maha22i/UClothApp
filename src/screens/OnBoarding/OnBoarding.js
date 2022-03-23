import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

import { COLORS, FONTS, SIZES } from "../../constants";
import { Line } from "../../components";

import { useNavigation } from "@react-navigation/native";

const SLIDES = [
  {
    id: "1",
    // title: "Welcome to Manero!",
    // description:
    //   "Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.",
    img: require("../../images/onboarding/onbarding2.png"),
  },
  //   {
  //     id: "2",
  //     // title: "Easy Track Order!",
  //     // description:
  //     //   "Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.",
  //     img: require("../../images/onboarding/onbarding1.png"),
  //   },
  {
    id: "3",
    // title: "Door to Door Delivery!",
    // description:
    //   "Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.",
    img: require("../../images/onboarding/onbarding3.jpg"),
  },
];

export default function OnBoarding() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  function updateCurrentSlideIndex(e) {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SIZES.width);
    setCurrentSlideIndex(currentIndex);
  }

  const navigation = useNavigation();

  function renderDots() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {SLIDES.map((_, index) => {
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
    );
  }

  return (
    <View>
      <FlatList
        data={SLIDES}
        horizontal={true}
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        renderItem={({ item }) => (
          <ImageBackground
            style={{
              width: SIZES.width,
              height: SIZES.height,
              justifyContent: "flex-end",
            }}
            source={item.img}
          >
            <View
              style={{
                width: SIZES.width,
                height: 475,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Image
                source={require("../../images/background/01.png")}
                style={{ height: "100%", width: "100%" }}
              /> */}
              <View
                style={{
                  position: "absolute",
                }}
              >
                <View style={{ height: 20 }} />
                {/* <Line /> */}
                {/* <Text
                  style={{
                    marginVertical: 14,
                    ...FONTS.H1,
                    textAlign: "center",
                    color: COLORS.black,
                    marginHorizontal: 80,
                  }}
                >
                  {item.title}
                </Text> */}
                {/* <Text
                  style={{
                    textAlign: "center",
                    marginHorizontal: 30,
                    ...FONTS.Mulish_400Regular,
                    fontSize: 16,
                    color: COLORS.gray,
                    lineHeight: 16 * 1.7,
                    marginBottom: 34,
                  }}
                >
                  {item.description}
                </Text> */}
                <TouchableOpacity
                  style={{
                    width: 255,
                    height: 50,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: COLORS.bleu,
                    alignSelf: "center",
                    marginBottom: 30,
                    marginTop: 400,
                  }}
                  onPress={() => navigation.navigate("SignIn")}
                >
                  <Text
                    style={{
                      textTransform: "uppercase",
                      fontSize: 14,
                      color: COLORS.white,
                    }}
                  >
                    Commencer
                  </Text>
                </TouchableOpacity>
                <View>{renderDots()}</View>
              </View>
            </View>
          </ImageBackground>
        )}
      />
    </View>
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
  },
});
