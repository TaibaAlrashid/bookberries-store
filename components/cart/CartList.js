import React from "react";

import { observer } from "mobx-react";
import { Spinner, List } from "native-base";

import cartStore from "../../stores/cartStore";
import bookStore from "../../stores/bookStore";

import CartItem from "./CartItem";

import { CheckoutButtonText, CheckoutButton } from "../../styles";

const CartList = () => {
  if (bookStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...bookStore.getProductById(item.productId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);
  return (
    <>
      <List>{cartList}</List>
      <CheckoutButton onPress={cartStore.checkout}>
        <CheckoutButtonText>Checkout</CheckoutButtonText>
      </CheckoutButton>
    </>
  );
};

export default observer(CartList);
