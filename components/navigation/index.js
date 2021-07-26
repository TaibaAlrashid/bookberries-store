import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home";
import ShopList from "../shop/ShopList";
import ShopDetail from "../shop/ShopDetail";
import CartList from "../cart/CartList";
import CartButton from "../cart/buttons/CartButton";

const Stack = createStackNavigator();
export default RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShopList"
        component={ShopList}
        options={{
          title: "Choose a Shop",
          headerRight: () => <CartButton />,
        }}
      />
      <Stack.Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Stack.Screen name="CartList" component={CartList} />
    </Stack.Navigator>
  );
};
