"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";
import { fetchStockData } from "../utils/fetchStockData";

const symbols = [
  "AAPL",
  "TSLA",
  "AMZN",
  "GOOGL",
  "MSFT",
  "FB",
  "NFLX",
  "NVDA",
  "PYPL",
  "INTC",
]; // Example: 10 symbols

const Page = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStockData = async () => {
    setLoading(true);
    const promises = symbols.map((symbol) => fetchStockData(symbol));
    const data = await Promise.all(promises);
    setStockData(data);
    setLoading(false);
  };

  useEffect(() => {
    getStockData(); // Initial fetch

    const interval = setInterval(() => {
      getStockData(); // Fetch data periodically
    }, 60000); // Fetch every minute (adjust as needed)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Box className="p-4">
      <Typography variant="h4" className="mb-4 font-bold text-center">
        Trending Stocks
      </Typography>
      {loading ? (
        <Typography variant="h6" className="text-center">
          Updating...
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {stockData.slice(0,4).map((stock, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="bg-white shadow-lg transition-transform transform hover:scale-105">
                <CardContent>
                  <Typography variant="h5" className="font-semibold">
                    {symbols[index]}
                  </Typography>
                  <Typography variant="h6" className="mt-2">
                    ${stock.c}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={stock.d >= 0 ? "green" : "red"}
                  >
                    {stock.d >= 0 ? `+${stock.d}` : stock.d} ({stock.dp}%)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <TableContainer component={Paper} className="mt-8">
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Change</TableCell>
              <TableCell align="right">Change %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stockData.map((stock, index) => (
              <TableRow key={index}>
                <TableCell>{symbols[index]}</TableCell>
                <TableCell align="right">${stock.c}</TableCell>
                <TableCell
                  align="right"
                  className={stock.d >= 0 ? "text-green-500" : "text-red-500"}
                >
                  {stock.d >= 0 ? `+${stock.d}` : stock.d}
                </TableCell>
                <TableCell
                  align="right"
                  className={stock.dp >= 0 ? "text-green-500" : "text-red-500"}
                >
                  {stock.dp}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Page;