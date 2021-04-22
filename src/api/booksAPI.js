import axios from "axios";
import { config } from "../config";

const bookAxios = axios.create({ baseURL: config.baseURL });

export const booksAPIs = {
  getBookList: () => bookAxios.get(`/books`),
  getBookDetail: (id) => bookAxios.get(`/profile/${id}`),
  addBook: (info) => bookAxios.post(`/books`, info),
  editBookById: (id, info) => bookAxios.patch(`/profile/${id}`, info),
};
