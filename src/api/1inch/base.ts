import axiosInstance from "axios";

export const axios1inch = axiosInstance.create({
  baseURL: "https://api.1inch.io/v4.0",
});
