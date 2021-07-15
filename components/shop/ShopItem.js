import React from "react";
// import { List } from "native-base";
import { Image, Text, View } from "react-native";

const ShopItem = ({ shop }) => {
  return (
    <View>
      <Image source={{ uri: shop.image }} style={{ width: 100, height: 100 }} />
      <Text>{shop.name}</Text>
    </View>
  );
};

export default ShopItem;
