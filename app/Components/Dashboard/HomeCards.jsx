'use client'
import * as React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { MonetizationOn, AttachMoney, ShoppingCart, AccountBalance } from '@mui/icons-material';

const cardData = [
  { name: 'Earning', price: '$5000', icon: <MonetizationOn/> },
  { name: 'Spend', price: '$1500', icon: <AttachMoney /> },
  { name: 'Sales', price: '$3000', icon: <ShoppingCart /> },
  { name: 'Your Balance', price: '$7000', icon: <AccountBalance /> }
];

export default function HomeCards() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <Card sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white',borderRadius:'10px' }}>
              <Box sx={{ p: 2, borderRadius: '50%', backgroundColor: '#f4f7fe', ml: 2 }}>
                {card.icon}
              </Box>
              <CardContent>
                <Typography  color="gray">{card.name}</Typography>
                <Typography variant="h6">{card.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
