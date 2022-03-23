import React, { useState, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { TopNav, Button } from "../../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../../constants";

export default function OtpCode() {
  const navigation = useNavigation();

  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "" });

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fiveInput = useRef();

  function renderHeader() {
    return <TopNav back={true} backOnPress={() => navigation.goBack()} />;
  }

  function renderContent() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              backgroundColor: "#F0F8FF",
              borderRadius: 12,
              width: "100%",
              marginTop: 34,
            }}
          >
            <Text
              style={{
                ...FONTS.H1,
                color: COLORS.black,
                marginBottom: 14,
                marginLeft: 6,
              }}
            >
              Vérification
            </Text>
            <Text
              style={{
                ...FONTS.Mulish_400Regular,
                fontSize: 16,
                color: COLORS.gray,
                paddingTop: 3,
                lineHeight: 25,
                marginBottom: 30,
              }}
            >
              Entrer le code à 4 chiffres que nous vous avons envoyé
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  borderRadius: 20,
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: COLORS.lightBlue,
                }}
              >
                <TextInput
                  style={{
                    textAlign: "center",
                    paddingHorizontal: 22,
                    paddingVertical: 14.5,
                    textAlign: "center",
                    fontSize: 24,
                    fontFamily: "Mulish_400Regular",
                    color: COLORS.black,
                    width: 59,
                  }}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={firstInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 1: text });
                    text && secondInput.current.focus();
                  }}
                />
              </View>
              <View
                style={{
                  borderRadius: 20,
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: COLORS.lightBlue,
                }}
              >
                <TextInput
                  style={{
                    textAlign: "center",
                    paddingHorizontal: 22,
                    paddingVertical: 14.5,
                    textAlign: "center",
                    fontSize: 24,
                    fontFamily: "Mulish_400Regular",
                    color: COLORS.black,
                    width: 59,
                  }}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={secondInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 2: text });
                    text
                      ? thirdInput.current.focus()
                      : firstInput.current.focus();
                  }}
                />
              </View>
              <View
                style={{
                  borderRadius: 20,
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: COLORS.lightBlue,
                }}
              >
                <TextInput
                  style={{
                    textAlign: "center",
                    paddingHorizontal: 22,
                    paddingVertical: 14.5,
                    textAlign: "center",
                    fontSize: 24,
                    fontFamily: "Mulish_400Regular",
                    color: COLORS.black,
                    width: 59,
                  }}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={thirdInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 3: text });
                    text
                      ? fourthInput.current.focus()
                      : secondInput.current.focus();
                  }}
                />
              </View>
              <View
                style={{
                  borderRadius: 20,
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: COLORS.lightBlue,
                }}
              >
                <TextInput
                  style={{
                    textAlign: "center",
                    paddingHorizontal: 22,
                    paddingVertical: 14.5,
                    textAlign: "center",
                    fontSize: 24,
                    fontFamily: "Mulish_400Regular",
                    color: COLORS.black,
                    width: 59,
                  }}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={fourthInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 4: text });
                    text
                      ? fiveInput.current.focus()
                      : thirdInput.current.focus();
                  }}
                />
              </View>
              {/* <View
                style={{
                  borderRadius: 60,
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: COLORS.lightBlue,
                }}
              >
                <TextInput
                  style={{
                    textAlign: "center",
                    paddingHorizontal: 22,
                    paddingVertical: 14.5,
                    textAlign: "center",
                    fontSize: 24,
                    fontFamily: "Mulish_400Regular",
                    color: COLORS.black,
                    width: 59,
                  }}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={fiveInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 5: text });
                    !text && fourthInput.current.focus();
                  }}
                />
              </View> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 30,
              }}
            >
              <Text
                style={{
                  fontFamily: "Mulish_400Regular",
                  fontSize: 16,
                  color: COLORS.gray,
                  marginRight: 3,
                  lineHeight: 16 * 1.7,
                }}
              >
                j'ai pas reçu de code?
              </Text>
              <TouchableOpacity onPress={() => console.log("Resend")}>
                <Text
                  style={{
                    fontFamily: "Mulish_400Regular",
                    fontSize: 16,
                    color: COLORS.black,
                    marginLeft: 20,
                  }}
                >
                  Renvoyer
                </Text>
              </TouchableOpacity>
            </View>

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
              }}
              onPress={() => navigation.navigate("AccountCreated")}
            >
              <Text
                style={{
                  textTransform: "uppercase",
                  fontSize: 14,
                  color: COLORS.white,
                }}
              >
                Vérifier
              </Text>
            </TouchableOpacity>
            {/* <Button
              text="Vérifier"
              onPress={() => navigation.navigate("AccountCreated")}
            /> */}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  return (
    <SafeAreaView style={{ ...ANDROIDSAFEAREAVIEW.AndroidSafeArea }}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
}
