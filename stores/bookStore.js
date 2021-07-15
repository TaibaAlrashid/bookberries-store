import { makeAutoObservable } from "mobx";
import instance from "./instance";

class BookStore {
  products = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchBooks = async () => {
    try {
      const response = await instance.get("/products");
      this.products = response.data;
    } catch (error) {
      console.log("fetchBooks:", error);
    }
  };

  getProductById = (productId) =>
    this.products.find((product) => product.id === productId);
}

const bookStore = new BookStore();
bookStore.fetchBooks();
export default bookStore;
