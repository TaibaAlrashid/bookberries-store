import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import instance from "./instance";

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchItems = async () => {
    const items = await AsyncStorage.getItem("cart");
    this.items = items ? JSON.parse(items) : [];
  };

  addToCart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.productId === newItem.productId
    );
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
    await AsyncStorage.setItem("cart", JSON.stringify(this.items));
  };

  deleteFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.productId !== itemId);
    await AsyncStorage.setItem("cart", JSON.stringify(this.items));
  };

  checkout = async () => {
    try {
      await instance.post("/checkout", this.items);
      this.items = [];
      await AsyncStorage.removeItem("cart");
      alert("Read more books!!");
    } catch (error) {
      console.log(
        "🚀 ~ file: cartStore.js ~ line 34 ~ CartStore ~ checkout= ~ error",
        error
      );
    }
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }
}

const cartStore = new CartStore();
cartStore.fetchItems();

export default cartStore;
