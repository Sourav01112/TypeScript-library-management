import React, { useState, useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import { BookList } from "../Components/BookList";
import { ProductType } from "./AddBook";
import { getBooks } from "../api";


export const HomePage = () => {
  const [books, setBooks] = useState<ProductType[]>([]);
 
  //GET
  useEffect(() => {
    getBooks().then((res) => {
      setBooks(res);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <BookList books={books} setBooks={setBooks} />
    </div>
  );
};
