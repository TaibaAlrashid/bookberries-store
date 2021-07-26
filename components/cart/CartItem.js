import React from "react";
import { List } from "native-base";
import { Text, View } from "react-native";
import { DeleteIcon } from "../../styles";
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <View>
      <List.Item>
        <Text> {item.name} </Text>
        <Text>
          {item.price} KD x {item.quantity}
        </Text>
        <Text>{item.price * item.quantity} KD</Text>
        <DeleteIcon
          name="x"
          size={20}
          onPress={() => cartStore.deleteFromCart(item.id)}
        />
      </List.Item>
    </View>
  );
};

export default CartItem;
