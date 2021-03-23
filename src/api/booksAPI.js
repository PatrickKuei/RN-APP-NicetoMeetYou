import axios from "axios";
import { config } from "../config";

export const booksAPIs = {
  getBookList: () => axios.get(`${config.baseURL}/books`),
};
