import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

import {
  TopNav,
  Line,
  InputField,
  Check,
  EyeOff,
  EyeOn,
  Button,
  Facebook,
  Google,
  Twitter,
} from "../../components";
import { COLORS, SIZES, FONTS, ANDROIDSAFEAREAVIEW } from "../../constants";

export default function SignIn({ navigation }) {
  const [passVissibleOne, setPassVissibleOne] = useState(false);
  const [passVissibleTwo, setPassVissibleTwo] = useState(false);

  function renderHeader() {
    return (
      <TopNav
        navigation={true}
        backOnPress={() => navigation.goBack()}
        back={true}
      />
    );
  }

  function renderContent() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingVertical: SIZES.height * 0.05,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* <Line containerStyle={{ marginBottom: 14 }} /> */}
          <View
            style={{
              backgroundColor: "#F0F8FF",
              borderRadius: 12,
              width: "100%",
            }}
          >
            <Text
              style={{
                ...FONTS.H1,
                marginBottom: 40,
              }}
            >
              S'inscrire
            </Text>
            <InputField
              text="Nom et prenom"
              placeholder="CHEHEM Mohamed"
              containerStyle={{ marginBottom: 20 }}
              icon={
                <View
                  style={{
                    paddingHorizontal: 30,
                    height: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Check strokeColor={COLORS.black} />
                </View>
              }
            />
            <InputField
              text="Email"
              placeholder="chehem21@gmail.com"
              containerStyle={{ marginBottom: 20 }}
              icon={
                <View
                  style={{
                    paddingHorizontal: 30,
                    height: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Check strokeColor={COLORS.black} />
                </View>
              }
            />
            <InputField
              text="Mot de passe"
              placeholder="••••••••"
              placeholderTextColor="#aaaaaa"
              containerStyle={{ marginBottom: 20 }}
              icon={
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 30,
                    height: "100%",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setPassVissibleOne((passVissibleOne) => !passVissibleOne);
                  }}
                >
                  {passVissibleOne == true ? <EyeOn /> : <EyeOff />}
                </TouchableOpacity>
              }
              secureTextEntry={passVissibleOne == true ? false : true}
            />
            {/* <InputField
            text="confirm password"
            placeholder="••••••••"
            containerStyle={{ marginBottom: 20 }}
            icon={
              <TouchableOpacity
                style={{
                  paddingHorizontal: 30,
                  height: "100%",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setPassVissibleTwo((passVissibleTwo) => !passVissibleTwo);
                }}
              >
                {passVissibleTwo == true ? <EyeOn /> : <EyeOff />}
              </TouchableOpacity>
            }
            secureTextEntry={passVissibleTwo == true ? false : true}
          /> */}

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
              onPress={() => navigation.navigate("VerifyNumber")}
            >
              <Text
                style={{
                  textTransform: "uppercase",
                  fontSize: 14,
                  color: COLORS.white,
                }}
              >
                Inscription
              </Text>
            </TouchableOpacity>

            {/* <Button
              text="Inscription"
              containerStyle={{ marginBottom: 20 }}
              onPress={() => navigation.navigate("VerifyNumber")}
            /> */}
          </View>
          {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 60,
            }}
          >
            <Text
              style={{
                fontFamily: "Mulish_400Regular",
                fontSize: 16,
                color: COLORS.gray,
                marginRight: 3,
              }}
            >
              J'ai déjà un compte?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text
                style={{
                  fontFamily: "Mulish_400Regular",
                  fontSize: 16,
                  color: COLORS.black,
                }}
              >
                Sign in.
              </Text>
            </TouchableOpacity>
          </View> */}
          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{ marginHorizontal: 7 }}
              onPress={() => console.log("Facebook")}
            >
              <Facebook />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginHorizontal: 7 }}
              onPress={() => console.log("Twitter")}
            >
              <Twitter />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginHorizontal: 7 }}
              onPress={() => console.log("Google")}
            >
              <Google />
            </TouchableOpacity>
          </View> */}
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
