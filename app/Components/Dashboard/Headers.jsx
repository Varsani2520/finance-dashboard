'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

export default function BasicBreadcrumbs({ title, route }) {
  return (
    <div role="presentation" style={{ padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="black" href="/#">
            Pages
          </Link>
          <Link
            underline="hover"
            color="black"
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
