import React, { useState } from "react";
import { addBook } from "../api";

export interface ProductType {
  name: string;
  author: string;
  image: string;
  chapter: number;
  quantity: number;
  id?: number;
}

export const AddBook = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [chapter, setChapters] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const obj = {
      name,
      author,
      image,
      chapter,
      quantity,
    };
    addBook(obj);
    setName("");
    setImage("");
    setAuthor("");
    setChapters(0);
    setQuantity(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="book-name"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />{" "}
        <br />
        <input
          className="book-image"
          value={image}
          placeholder="image"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setImage(e.target.value)
          }
        />{" "}
        <br />
        <input
          className="book-author"
          value={author}
          placeholder="author"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAuthor(e.target.value)
          }
        />{" "}
        <br />
        <input
          className="book-chapter"
          value={chapter}
          placeholder="chapter"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setChapters(+e.target.value)
          }
        />{" "}
        <br />
        <input
          className="book-quantity"
          value={quantity}
          placeholder="quantity"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuantity(+e.target.value)
          }
        />
        <button className="submit-form">Submit</button>
      </form>
    </div>
  );
};
<br />;
