"use client";

import { useState } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import {
  Home,
  TrendingUp,
  AttachMoney,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import Link from "next/link";
import { logoutuser } from "@/app/Redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Sidebar = ({ toggleTheme, darkMode }) => {
  const [activeItem, setActiveItem] = useState("home");
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

  const theme = useTheme();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.message);

  const Logout = () => {
    dispatch(logoutuser());
    toast.success("Successfully logged out");
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          backgroundColor: theme.palette.background.sidebar,
        }}
        className="h-full border-r"
      >
        <Box className="flex items-center justify-between p-4">
          <span
            className="text-2xl font-bold"
            style={{ color: theme.palette.background.headline }}
          >
            Finance Dashboard
          </span>
          <IconButton onClick={toggleTheme}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
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
        {user && (
          <h1
            onClick={() => Logout()}
            style={{ color: theme.palette.background.headline }}
            className="ml-auto mr-3 hover:cursor-pointer border border-gray-500 w-max p-3 rounded-2xl"
          >
            Logout
          </h1>
        )}
      </Box>
    </>
  );
};

export default Sidebar;
