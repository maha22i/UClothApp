import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  TopNav,
  Counter,
  Button,
  ApplyPromocode,
  ShoppingBag,
  Line,
} from "../../components";
import { COLORS, FONTS, SIZES, CART } from "../../constants";

export default function Order() {
  const navigation = useNavigation();

  const [myCartList, setMyCartList] = useState(CART);

  function updateQuantityHandler(newQty, id) {
    const newMyCartList = myCartList.map((cl) =>
      cl.id === id ? { ...cl, quantity: newQty } : cl
    );

    setMyCartList(newMyCartList);
  }

  function renderHeader() {
    return (
      <TopNav
        text={CART.length > 0 ? "Order" : "Cart"}
        back={CART.length > 0 ? true : false}
        menu={CART.length > 0 ? false : true}
        bag={true}
        // backOnPress={() => navigation.goBack()}
        backOnPress={() => navigation.getParent()}
        containerStyle={{
          borderBottomWidth: 1,
          borderBottomColor: COLORS.lightBlue,
        }}
      />
    );
  }

  function renderContent() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingTop: 20,
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: COLORS.lightBlue,
            marginBottom: 30,
          }}
        >
          {myCartList.map((item, index) => {
            return (
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    width: 100,
                    height: 100,
                    marginRight: 14,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      ...FONTS.Mulish_400Regular,
                      fontSize: 14,
                      color: COLORS.gray,
                      lineHeight: 14 * 1.7,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      flex: 1,
                      alignItems: "flex-start",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          ...FONTS.Mulish_400Regular,
                          fontSize: 12,
                          color: COLORS.gray,
                          marginRight: 4,
                          textDecorationLine: "line-through",
                        }}
                      >
                        {item.oldPrice}
                      </Text>
                      <Text
                        style={{
                          ...FONTS.Mulish_600SemiBold,
                          fontSize: 14,
                          color: COLORS.carrot,
                          lineHeight: 14 * 1.5,
                        }}
                      >
                        {item.newPrice}
                      </Text>
                    </View>
                  </View>

                  <Text
                    style={{
                      ...FONTS.Mulish_400Regular,
                      fontSize: 14,
                      color: COLORS.gray,
                      lineHeight: 14 * 1.7,
                    }}
                  >
                    Size: {item.size}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.Mulish_400Regular,
                      fontSize: 14,
                      color: COLORS.gray,
                      lineHeight: 14 * 1.7,
                    }}
                  >
                    {item.color}
                  </Text>
                </View>
                <Counter
                  value={item.quantity}
                  onAdd={() =>
                    updateQuantityHandler(item.quantity + 1, item.id)
                  }
                  onMinus={() => {
                    if (item.quantity > 1) {
                      updateQuantityHandler(item.quantity - 1, item.id);
                    }
                  }}
                />
              </View>
            );
          })}
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{ marginBottom: 30 }}
            onPress={() => setPromocode(true)}
          >
            <ApplyPromocode />
          </TouchableOpacity>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  ...FONTS.H5,
                  marginBottom: 10,
                  color: COLORS.black,
                }}
              >
                Subtotal
              </Text>
              <Text
                style={{
                  ...FONTS.H5,
                  marginBottom: 10,
                  color: COLORS.black,
                }}
              >
                $45.98
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 9,
              }}
            >
              <Text
                style={{
                  ...FONTS.Mulish_400Regular,
                  color: COLORS.gray,
                  fontSize: 16,
                  lineHeight: 16 * 1.7,
                }}
              >
                Discount
              </Text>
              <Text
                style={{
                  ...FONTS.Mulish_400Regular,
                  color: COLORS.gray,
                  fontSize: 16,
                  lineHeight: 16 * 1.7,
                }}
              >
                -4.29
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  ...FONTS.Mulish_400Regular,
                  color: COLORS.gray,
                  fontSize: 16,
                  lineHeight: 16 * 1.7,
                }}
              >
                Delivery
              </Text>
              <Text
                style={{
                  color: "#00824B",
                  ...FONTS.Mulish_400Regular,
                  fontSize: 16,
                  lineHeight: 16 * 1.7,
                }}
              >
                Free
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: SIZES.width,
            height: 1,
            backgroundColor: COLORS.lightBlue,
          }}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: 40,
            }}
          >
            <Text
              style={{
                ...FONTS.H4,
                color: COLORS.black,
              }}
            >
              Total
            </Text>
            <Text
              style={{
                ...FONTS.H4,
                color: COLORS.black,
              }}
            >
              $41.69
            </Text>
          </View>
          <Button
            text="proceed to checkout"
            onPress={() => navigation.navigate("Checkout")}
            containerStyle={{ marginBottom: 30 }}
          />
        </View>
      </ScrollView>
    );
  }

  function renderCartIsEmpty() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <View
          style={{
            alignItems: "center",
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          <ShoppingBag />
        </View>
        <Line containerStyle={{ marginBottom: 14 }} />
        <Text
          style={{
            textAlign: "center",
            ...FONTS.H2,
            color: COLORS.black,
            paddingHorizontal: 60,
            marginBottom: 14,
          }}
        >
          Your cart is empty!
        </Text>
        <Text
          style={{
            textAlign: "center",
            ...FONTS.Mulish_400Regular,
            fontSize: 16,
            color: COLORS.gray,
            lineHeight: 16 * 1.7,
            paddingHorizontal: 50,
            marginBottom: 30,
          }}
        >
          Looks like you haven't made your order yet.
        </Text>
        <Button
          text="shop now"
          containerStyle={{ marginBottom: 30 }}
          onPress={() => navigation.navigate("Shop")}
        />
      </ScrollView>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      {CART.length > 0 ? renderContent() : renderCartIsEmpty()}
    </View>
  );
}
