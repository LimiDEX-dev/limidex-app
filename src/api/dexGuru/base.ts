import axiosInstance from "axios";

export const axiosDexGuru = axiosInstance.create({
  baseURL: "https://api.dev.dex.guru/v1",
});
