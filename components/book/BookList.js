import React from "react";
import { List, Spinner } from "native-base";
import bookStore from "../../stores/bookStore";
import BookItem from "./BookItem";
import { ListWrapper } from "../../styles";

const BookList = ({ products }) => {
  if (bookStore.loading) return <Spinner />;
  const bookList = products.map((product) => (
    <BookItem product={product} key={product.id} />
  ));
  return (
    <ListWrapper>
      <List>{bookList}</List>
    </ListWrapper>
  );
};

export default BookList;
