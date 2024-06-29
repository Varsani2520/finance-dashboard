'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';

export default function BasicBreadcrumbs({ title, route }) {
    const theme = useTheme();

  return (
    <div role="presentation" style={{ padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" sx={{color:theme.palette.background.text}} href="/#">
            Pages
          </Link>
          <Link
            underline="hover"
            sx={{color:theme.palette.background.text}}
            href={`/${route === 'main-dashboard' ? '/' : route}`}
          >
            {route}
          </Link>
        </Breadcrumbs>
        <Typography color="text.primary" style={{ fontSize: "34px", fontWeight: 'bold' }}>
          {title}
        </Typography>
      </div>

      <Button variant="contained" color="primary" href="/login">
        Login
      </Button>
    </div>
  );
}
