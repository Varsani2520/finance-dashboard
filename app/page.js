"use client";

import { useTheme } from "@mui/material";
import Analytics from "./Components/Dashboard/Analytics";
import Headers from "./Components/Dashboard/Headers";
import HomeCards from "./Components/Dashboard/HomeCards";
import Metrics from "./Components/Dashboard/Metrics";
export default function Home() {
  const theme = useTheme();

  return (
    <div style={{ background: theme.palette.background.page }}>
      <Headers route={"main-dashboard"} title={"Main Dashboard"} />
      <HomeCards />
      <Metrics title="This Month" />
      <Analytics />
    </div>
  );
}
