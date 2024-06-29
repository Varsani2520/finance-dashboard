"use client";


import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, useTheme } from '@mui/material';
import { fetchStockData } from '../utils/fetchStockData';
import BasicBreadcrumbs from '../Components/Dashboard/Headers';

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

const Finance = () => {
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

  const theme = useTheme();

  return (
    <div style={{ background: theme.palette.background.page }} className="min-h-screen">
      <BasicBreadcrumbs route={"finance"} title={"Finance Dashboard"} />
      <Box className="p-4">
        {loading ? (
          <Typography variant="h6" className="text-center">
            Updating...
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {stockData && stockData.map((stock, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{ bgcolor: theme.palette.background.card }}
                  className="shadow-lg transition-transform transform hover:scale-105"
                >
                  <CardContent>
                    <Typography variant="h5" className="font-semibold">
                      {symbols[index]}
                    </Typography>
                    <Typography variant="h6" className="mt-2">
                      ${stock && stock.c}
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
      </Box>
    </div>
  );
};

export default Finance;
