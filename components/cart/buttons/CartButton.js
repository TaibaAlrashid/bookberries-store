import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import cartStore from "../../../stores/cartStore";
import { CartButtonStyled, CartTextStyled } from "../../../styles";
import { Button } from "native-base";
import authStore from "../../../stores/authStore";
import { Alert } from "react-native";

const CartButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (authStore.user) {
      navigation.navigate("CartList");
    } else {
      Alert.alert(
        "Sign in",
        "You need to signin before checkout",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <Button onPress={handlePress}>
      <CartButtonStyled name="shopping-cart" size={24} />
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
    </Button>
  );
};

export default observer(CartButton);
