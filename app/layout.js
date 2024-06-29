"use client";
import { StoreProvider } from './Redux/storeProvider';
import { Inter } from "next/font/google";
import { Grid, ThemeProvider } from "@mui/material";
import "./globals.css";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isDarkTheme, setDarkTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "true"
  );

  function toggleTheme() {
    setDarkTheme(!isDarkTheme);
    localStorage.setItem("theme", !isDarkTheme);
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>

        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Sidebar toggleTheme={toggleTheme} darkMode={isDarkTheme} />
            </Grid>
            <Grid item xs={12} md={9}>
              <div>{children}</div>
            </Grid>
          </Grid>
        </ThemeProvider>
</StoreProvider>
      </body>
    </html>
  );
}
