'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';



export default function BasicBreadcrumbs({title, route}) {
  return (
    <div role="presentation"  style={{padding:'40px'}}>
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
        <Typography color="text.primary" style={{fontSize:"34px",fontWeight:'bold'}}>{title}</Typography>
    </div>
  );
}