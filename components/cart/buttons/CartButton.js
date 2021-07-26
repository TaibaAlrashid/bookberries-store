import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import cartStore from "../../../stores/cartStore";
import { CartButtonStyled, CartTextStyled } from "../../../styles";
import { Button } from "native-base";
import { ButtonStyled } from "../../../styles";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button onPress={() => navigation.navigate("CartList")}>
      <CartButtonStyled name="shopping-cart" size={24} />
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
    </Button>
  );
};

export default observer(CartButton);
