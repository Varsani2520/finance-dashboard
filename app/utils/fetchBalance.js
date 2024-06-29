import axios from 'axios';
import { BALANCE_API_KEY } from '../config/config';

const BASE_URL = 'https://financialmodelingprep.com/api/v3';

export const fetchBalance = async (symbol) => {
  const url = `${BASE_URL}/income-statement-growth/AMZN?period=annual&apikey=${BALANCE_API_KEY}`;
  try {
    const response = await axios.get(url);
    if (response.data) {
      console.log('balance', response.data);
      return response.data;
    } else {
      console.error(`Invalid response for ${symbol}:`, response.data);
      return null;
    }
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
};
