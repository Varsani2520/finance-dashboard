import axios from "axios";

export const httpAxios = axios.create({
  baseURL: "https://finance-dashboard-flax.vercel.app",
});