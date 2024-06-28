// import './globals.css'
import { Inter } from 'next/font/google'
import { Grid } from "@mui/material";
import Sidebar from "./components/sidebar/Sidebar";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            <div style={{ background: "#f4f8fe" }}>
            {children}
            </div>
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
