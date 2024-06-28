import axios from 'axios';
import { CHART_API_KEY } from '../config/config';

const BASE_URL = 'https://financialmodelingprep.com/api/v3';

export const fetchChartData = async (symbol) => {
  const url = `${BASE_URL}/technical_indicator/5min/AMZN?type=standardDeviation&period=10&apikey=${CHART_API_KEY}`;
  try {
    const response = await axios.get(url);
    if (response.data) {
      console.log('res', response.data);
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
