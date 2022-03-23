import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import PhoneInput from "react-native-phone-input";
import { useNavigation } from "@react-navigation/native";

import { TopNav, Button } from "../../components";
import { ANDROIDSAFEAREAVIEW, COLORS, FONTS } from "../../constants";

export default function VerifyNumber() {
  const navigation = useNavigation();

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
              marginTop: 44,
            }}
          >
            <Text
              style={{
                ...FONTS.H1,
                color: COLORS.black,
                marginBottom: 14,
              }}
            >
              Vérification
            </Text>
            <Text
              style={{
                ...FONTS.Mulish_400Regular,
                fontSize: 16,
                color: COLORS.gray,
                paddingTop: 8,
                lineHeight: 25,
                marginBottom: 30,
              }}
            >
              Entrer votre numéro de téléphone pour verifier
              {/* Un code pin à 6 chiffres vous à été envoyé, saisissez-le
              ci-dessous pour continuer */}
            </Text>
            <PhoneInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#bfbbbb",
                marginBottom: 20,
                fontSize: 16,
                ...FONTS.Mulish_400Regular,
                paddingBottom: 9,
              }}
              placeholder="123456789"
              placeholderTextColor={COLORS.black}
              initialCountry={"fr"}
            />

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
              onPress={() => navigation.navigate("OtpCode")}
            >
              <Text
                style={{
                  textTransform: "uppercase",
                  fontSize: 14,
                  color: COLORS.white,
                }}
              >
                Continuer
              </Text>
            </TouchableOpacity>
            {/* <Button
              text="Continuer"
              onPress={() => navigation.navigate("OtpCode")}
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
