import axios from "axios";
import { ApiResponse } from "../utils/ApiResponse";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://api.example.com",
  timeout: 10000,
});

httpClient.interceptors.response.use(
  (response) => {
    const pagination = response.data?.pagination || null;
    return ApiResponse.success(response.data, { pagination });
  },
  (error) => {
    const message = error.response?.data?.message || error.message || "API request failed";
    const errorCode = error.response?.data?.code || null;
    return Promise.reject(ApiResponse.error(message, errorCode));
  }
);

export default httpClient;
