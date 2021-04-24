import axios from "axios";
import { config } from "../config";

const axiosInstance = axios.create({ baseURL: config.baseURL });

export const listAPIs = {
  getUsers: () => axiosInstance.get(`/users`),
};
