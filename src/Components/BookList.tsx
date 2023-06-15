import React, { useEffect } from "react";
import { ProductType } from "../Pages/AddBook";
import { BookCard } from "./BookCard";
import { deleteBook, getBooks, updateQuantity } from "../api";

interface propsType {
  books: ProductType[];
  setBooks: React.Dispatch<React.SetStateAction<ProductType[]>>;
}
export const BookList = ({ books, setBooks }: propsType) => {
  //QUANTITY

  const handleQuantity = (id: number, payload: number) => {
    updateQuantity(id, payload).then(() => {
      const quantity = books?.map((ele) => {
        return id === ele.id
          ? { ...ele, quantity: ele.quantity + payload }
          : ele;
      });
      setBooks(quantity);
    });
  };
 

  const handleDelete = (id: number) => {
    deleteBook(id).then(() => {
      const updatedAfterDelete = books?.filter((ele) => id !== ele.id);
      setBooks(updatedAfterDelete);
    });
  };

  // useEffect(() => {
  //   getBooks().then((res) => {
  //     setBooks(res);
  //   });
  // }, []);

  return (
    <div
      data-testid="book-list"
      style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
    >
      {books.length > 0 &&
        books?.map((ele) => {
          return (
            <BookCard
              key={ele.id}
              {...ele}
              handleQuantity={handleQuantity}
              handleDelete={handleDelete}
            />
          );
        })}
    </div>
  );
};
