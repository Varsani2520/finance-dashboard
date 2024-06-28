"use client";

// components/Sidebar.js
import { useState } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home,
  TrendingUp,
  AttachMoney,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Link from "next/link";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

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

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{display: {xs: "none", md: "block"}}} className="h-screen border-r">
        <Box className="flex items-center justify-between p-4">
          <span className="text-lg font-bold">Finance Dashboard</span>
          <IconButton onClick={handleThemeChange}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
        <List className="mt-8 p-2">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.route}>
              <ListItem
                button
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
    </ThemeProvider>
  );
};

export default Sidebar;
