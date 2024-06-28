// utils/fetchStockData.js
import axios from "axios";
import { API_KEY } from "../config/config";

const BASE_URL = "https://finnhub.io/api/v1";

export const fetchStockData = async (symbol) => {
  const url = `${BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`;
  try {
    const response = await axios.get(url);
    if (response.data && response.data.c !== undefined) {
      return response.data;
    } else {
      console.error(`Invalid response for ${symbol}:`, response.data);
      return null;
    }
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null;
  }
};
