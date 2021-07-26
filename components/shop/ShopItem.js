import React from "react";
import { List } from "native-base";
import { Image, Text } from "react-native";
import { ShopItemStyled } from "../../styles";

const ShopItem = ({ shop, navigation }) => {
  return (
    <List.Item
      onPress={() => navigation.navigate("ShopDetail", { shop: shop })}
    >
      <Image
        source={{ uri: shop.image }}
        alt="Shop Image"
        style={{ width: 150, height: 100 }}
      />
      <ShopItemStyled>{shop.name}</ShopItemStyled>
    </List.Item>
  );
};

export default ShopItem;
