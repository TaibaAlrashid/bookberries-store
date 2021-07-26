import React from "react";
import { observer } from "mobx-react";
import bookStore from "../../stores/bookStore";
import shopStore from "../../stores/shopStore";
import BookList from "../book/BookList";
import { Spinner } from "native-base";
import { View } from "react-native";
import { Image, Text } from "native-base";
import { ShopListWrapper, ShopTitle } from "../../styles";

const ShopDetail = ({ route }) => {
  const { shop } = route.params;
  if (shopStore.loading) return <Spinner />;

  const products = shop.products.map((product) =>
    bookStore.getProductById(product.id)
  );
  return (
    <>
      <ShopListWrapper>
        <Image
          source={{ uri: shop.image }}
          alt="Shop Image"
          style={{ width: 150, height: 100 }}
        />
        <ShopTitle>{shop.name}</ShopTitle>
      </ShopListWrapper>
      <BookList products={products} />
    </>
  );
};

export default observer(ShopDetail);
