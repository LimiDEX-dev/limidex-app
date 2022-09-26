import axios from "axios";

export const axiosCoinCap = axios.create({
  baseURL: "https://api.coincap.io/v2/",
});
