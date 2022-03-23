import {
  View,
  Text,
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
  CategoryCheck,
} from "../../components";
import { COLORS, SIZES, FONTS, ANDROIDSAFEAREAVIEW } from "../../constants";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();

  const [passVissible, setPassVissible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  function renderHeader() {
    return (
      <TopNav
        text="Connexion"
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
                textAlign: "center",
                ...FONTS.H1,
                marginBottom: 14,
              }}
            >
              Bienvenue!
            </Text>
            {/* <Text
            style={{
              textAlign: "center",
              marginBottom: 45,
              color: COLORS.gray,
              fontFamily: "Mulish_400Regular",
              fontSize: 16,
            }}
          ></Text> */}
            <InputField
              text="Email"
              placeholder="chehem21@gmail.com"
              containerStyle={{ marginBottom: 20 }}
              icon={
                <View
                  style={{
                    paddingHorizontal: 30,
                    height: "100%",
                    color: COLORS.bleu,
                    justifyContent: "center",
                  }}
                >
                  <Check strokeColor={COLORS.bleu} />
                </View>
              }
            />
            <InputField
              text="password"
              placeholder="med"
              containerStyle={{ marginBottom: 20 }}
              icon={
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 30,
                    height: "100%",
                    color: COLORS.bleu,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setPassVissible((passVissible) => !passVissible);
                  }}
                >
                  {passVissible == true ? <EyeOn /> : <EyeOff />}
                </TouchableOpacity>
              }
              secureTextEntry={passVissible == true ? false : true}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 30,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignItems: "center",
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
                    color: COLORS.bleu,
                  }}
                >
                  Se souvenir
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text style={{ color: COLORS.bleu }}>Mot passe Oublié?</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Button
                text="Connexion"
                containerStyle={{ marginBottom: 20 }}
                onPress={() => navigation.navigate("MainLayout")}
              />
            </View>

            <View
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
                Vous n'avez pas de compte?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text
                  style={{
                    fontFamily: "Mulish_400Regular",
                    fontSize: 16,
                    color: COLORS.bleu,
                  }}
                >
                  S'inscrire.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                ...FONTS.H2,
                marginBottom: 14,
                marginTop: 10,
              }}
            >
              -OU-
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 14,
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
