import React from "react";
import { ProductType } from "../Pages/AddBook";

interface newHandleProp extends ProductType {
  handleQuantity: (id: number, payload: number) => void;
  handleDelete: (id: number) => void;
}

export const BookCard = ({
  image,
  name,
  author,
  chapter,
  quantity,
  id,
  handleQuantity,
  handleDelete,
}: newHandleProp) => {
  const ID = Number(id);
  return (
    <div className="book-card">
      <img src={image} alt="" className="book-image" />
      <p className="book-name">{name}</p>
      <p className="book-author">{author}</p>
      <p className="book-chapter">{chapter}</p>
      <button
        data-testid="increase-quantity"
        onClick={() => handleQuantity(ID, +1)}
        disabled={quantity >= 10}
      >
        Quantity ++
      </button>

      <h3 className="book-quantity">{quantity}</h3>

      <button
        data-testid="decrease-quantity"
        onClick={() => handleQuantity(ID, -1)}
        disabled={quantity == 0}
      >
        Quantity --
      </button>{" "}
      <br />
      <button data-testid="delete-button" onClick={() => handleDelete(ID)}>
        DELETE
      </button>
    </div>
  );
};
