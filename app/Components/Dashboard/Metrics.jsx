'use client'
import * as React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { InsertChartOutlined } from '@mui/icons-material';

const data = [
  { name: 'SEP', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'OCT', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'NOV', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'DEC', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'JAN', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'FEB', uv: 2390, pv: 3800, amt: 2500 },
];

const barData = [
  { name: '17', uv: 4000, pv: 2400, amt: 2400 },
  { name: '18', uv: 3000, pv: 1398, amt: 2210 },
  { name: '19', uv: 2000, pv: 9800, amt: 2290 },
  { name: '20', uv: 2780, pv: 3908, amt: 2000 },
  { name: '21', uv: 1890, pv: 4800, amt: 2181 },
  { name: '22', uv: 2390, pv: 3800, amt: 2500 },
  { name: '23', uv: 3490, pv: 4300, amt: 2100 },
];

export default function Metrics({title}) {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {/* Card 1 */}
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: 'white', borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1">{title}</Typography>
                <InsertChartOutlined />
              </Box>
              <Typography variant="h4">$37.5K</Typography>
              <Typography variant="subtitle2" color="green">+2.45%</Typography>
              <Typography variant="body2" color="textSecondary">On track</Typography>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: 'white', borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1">Weekly Revenue</Typography>
                <InsertChartOutlined />
              </Box>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
