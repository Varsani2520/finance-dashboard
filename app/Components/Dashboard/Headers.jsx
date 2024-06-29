"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material";

export default function BasicBreadcrumbs({ title, route }) {
  const theme = useTheme();

  return (
    <div role="presentation" style={{ padding: "40px" }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" href="/#" sx={{color: theme.palette.background.headline}}>
          Pages
        </Link>
        <Link
          underline="hover"
          sx={{color: theme.palette.background.headline}}
          href={`/${route === "main-dashboard" ? "/" : route}`}
        >
          {route}
        </Link>
      </Breadcrumbs>
      <Typography
        color="text.primary"
        style={{ fontSize: "34px", fontWeight: "bold" }}
      >
        {title}
      </Typography>
    </div>
  );
}
