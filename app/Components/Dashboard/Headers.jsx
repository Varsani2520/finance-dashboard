"use client";

import {
  Box,
  Drawer,
  IconButton,
  Typography,
  Breadcrumbs,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  useTheme,
  Avatar,
} from "@mui/material";
import {
  AttachMoney,
  Home,
  MenuRounded,
  TrendingUp,
} from "@mui/icons-material";

import * as React from "react";
import { useSelector } from "react-redux";

export default function BasicBreadcrumbs({ title, route }) {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("home");

  const menuItems = [
    { name: "home", icon: <Home />, label: "Home", route: "/" },
    {
      name: "trending",
      icon: <TrendingUp />,
      label: "Trending",
      route: "/trending",
    },
    {
      name: "finance",
      icon: <AttachMoney />,
      label: "Finance",
      route: "/finance",
    },
  ];

  const user = useSelector((state) => state.auth.message);
  let userInfo = user ? useSelector((state) => state.auth.authUser.data.username) : "";

  console.log(userInfo);

  return (
    <div
      role="presentation"
      style={{
        padding: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="flex flex-col">
        <Box display={{ xs: "block", md: "none" }} mb={2}>
          <IconButton onClick={() => setDrawerOpen(true)}>
            <MenuRounded />
          </IconButton>
        </Box>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            href="/#"
            sx={{ color: theme.palette.background.headline }}
          >
            Pages
          </Link>
          <Link
            underline="hover"
            sx={{ color: theme.palette.background.headline }}
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

      {user ? (
        <div className="flex items-center">
          <h1 className="font-semibold mr-2 text-teal-500">{user && userInfo}</h1>
          <Avatar />
        </div>
      ) : (
        <Button variant="contained" color="primary" href="/login">
          Login
        </Button>
      )}

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box width={300} bgcolor={theme.palette.background.slider}>
          <Box className="flex items-center justify-between p-4">
            <span
              className="text-2xl font-bold"
              style={{ color: theme.palette.background.headline }}
            >
              Finance Dashboard
            </span>
          </Box>

          <List className="mt-8 p-2">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.route}>
                <ListItem
                  button
                  sx={{ color: theme.palette.background.headline }}
                  onClick={() => setActiveItem(item.name)}
                  className={`p-4 rounded-lg hover:bg-teal-300 my-2 ${
                    activeItem === item.name ? "bg-teal-500" : "bg-transparent"
                  }`}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
