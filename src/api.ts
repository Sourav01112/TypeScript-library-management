import axios, { AxiosResponse } from "axios";
import { ProductType } from "./Pages/AddBook";

const baseUrl = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`;

export const getBooks = async () => {
  const res: AxiosResponse<ProductType[]> = await axios.get(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`
  );
  // console.log(res);
  return res.data;
};

//POST

export const addBook = async (obj: ProductType) => {
  const res: AxiosResponse<ProductType[]> = await axios.post(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,
    obj
  );
};

//PATCH
export const updateQuantity = async (id: number, payload: number) => {
  const res: AxiosResponse<ProductType[]> = await axios.get(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`
  );

  const data: AxiosResponse<ProductType[]> = await axios.patch(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`,
    payload
  );
};

//DELETE
export const deleteBook = async (id: number) => {
  const res: AxiosResponse<ProductType[]> = await axios.get(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`
  );

  const res1: AxiosResponse<ProductType[]> = await axios.delete(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`
  );
  console.log(res1);
  return res1.data;
};
