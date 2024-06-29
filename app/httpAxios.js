import axios from "axios";

export const httpAxios = axios.create({
  baseURL: "https://finance-dashboard-flax.vercel.app/",
  // baseURL:"http://localhost:8000"
});