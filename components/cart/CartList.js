import React from "react";

import { observer } from "mobx-react";
import { Spinner, List } from "native-base";

import cartStore from "../../stores/cartStore";
import bookStore from "../../stores/bookStore";
import authStore from "../../stores/authStore";

import CartItem from "./CartItem";
import { Octicons } from "@expo/vector-icons";

import {
  CheckoutButtonText,
  CheckoutButton,
  SignoutButton,
} from "../../styles";

const CartList = ({ navigation }) => {
  if (bookStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...bookStore.getProductById(item.productId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);

  const handlePress = async () => {
    await authStore.signout();
    navigation.replace("Home");
  };
  return (
    <>
      <List>{cartList}</List>
      <CheckoutButton onPress={cartStore.checkout}>
        <CheckoutButtonText>Checkout</CheckoutButtonText>
      </CheckoutButton>
      <SignoutButton onPress={handlePress}>
        <Octicons name="sign-out" size={24} color="black" />
      </SignoutButton>
    </>
  );
};

export default observer(CartList);
