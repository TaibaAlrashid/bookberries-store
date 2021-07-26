import React, { useState } from "react";
import { List, Button } from "native-base";
import { Text, Image } from "react-native";

import NumericInput from "react-native-numeric-input";
import cartStore from "../../stores/cartStore";

const BookItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { productId: product.id, quantity };
    cartStore.addToCart(newItem);
  };
  return (
    <>
      <List.Item>
        <Image
          source={{ uri: product.image }}
          alt="Book Name"
          style={{ width: 100, height: 150 }}
        />
        <Text> {product.name} </Text>
        <Button.Group
          variant="solid"
          space={3}
          mx={{
            base: "auto",
            md: 0,
          }}
        >
          <NumericInput
            rounded
            totalWidth={80}
            totalHeight={40}
            initValue={quantity}
            minValue={1}
            onChange={setQuantity}
          />
          <Button onPress={handleAdd}>
            <Text>Add</Text>
          </Button>
        </Button.Group>
      </List.Item>
    </>
  );
};

export default BookItem;
