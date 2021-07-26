import React from "react";
import { observer } from "mobx-react";
import shopStore from "../../stores/shopStore";
import { Spinner } from "native-base";
import { View } from "react-native";
import ShopItem from "./ShopItem";
import { ListWrapper } from "../../styles";
import { List } from "native-base";

const ShopList = ({ navigation }) => {
  if (shopStore.loading) return <Spinner />;
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop.id} navigation={navigation} />
  ));

  return (
    <ListWrapper>
      <List>{shopList}</List>
    </ListWrapper>
  );
};

export default observer(ShopList);
