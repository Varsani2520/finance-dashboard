'use client'
import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { MonetizationOn, AttachMoney, ShoppingCart, AccountBalance } from '@mui/icons-material';
import { fetchBalance } from '@/app/utils/fetchBalance';

const HomeCards = () => {
  const [data, setData] = useState({
    earnings: '$0',
    spend: '$0',
    sales: '$0',
    revenue: '$0',
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBalance('AMZN');
      console.log("data", result);
      if (result && result.length > 0) {
        const item = result[0];
        setData({
          earnings: `$${(item.growthNetIncome * 100).toFixed(2) || 0}`,
          spend: `$${(Math.abs(item.growthOperatingExpenses * 100)).toFixed(2) || 0}`,
          sales: `$${(item.growthGrossProfit * 100).toFixed(2) || 0}`,
          revenue: `$${(item.growthRevenue * 100).toFixed(2) || 0}`,
        });
      }
    };

    fetchData();
  }, []);

  const cardData = [
    { name: 'Earnings', price: data.earnings, icon: <MonetizationOn /> },
    { name: 'Spend', price: data.spend, icon: <AttachMoney /> },
    { name: 'Sales', price: data.sales, icon: <ShoppingCart /> },
    { name: 'Revenue', price: data.revenue, icon: <AccountBalance /> },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <Card sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '10px' }}>
              <Box sx={{ p: 2, borderRadius: '50%', backgroundColor: '#f4f7fe', ml: 2 }}>
                {card.icon}
              </Box>
              <CardContent>
                <Typography color="gray">{card.name}</Typography>
                <Typography variant="h6">{card.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeCards;
