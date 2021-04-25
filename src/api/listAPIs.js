import axios from "axios";
import { configs } from "../configs";

const axiosInstance = axios.create({ baseURL: configs.baseURL });

export const listAPIs = {
  getUsers: () => axiosInstance.get(`/users`),
};
