import React from "react";
import { observer } from "mobx-react";
import shopStore from "../../stores/shopStore";
import { Spinner } from "native-base";
import { View } from "react-native";
import ShopItem from "./ShopItem";

const ShopList = () => {
  if (shopStore.loading) return <Spinner />;
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop.id} />
  ));

  return <View>{shopList}</View>;
};

export default observer(ShopList);
