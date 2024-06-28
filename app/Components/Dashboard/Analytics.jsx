import { TableDataStocks } from "@/app/trending/page";
import { Box, Grid } from "@mui/material";
import React from "react";
import Metrics from "./Metrics";

const Analytics = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container>
        <Grid md={6} xs={12}>
          <TableDataStocks isHome={true} />
        </Grid>
        <Grid md={6} xs={12}>
          <Metrics title="Visitor" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
