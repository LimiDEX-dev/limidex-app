import axiosInstance from "axios";

export const axiosCoinGecko = axiosInstance.create({
  baseURL: "https://api.coingecko.com/api/v3",
});
