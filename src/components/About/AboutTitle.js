import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function AboutTitle({ title, subtitle }) {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      width="100%"
      margin={3}
    >
      <Typography color="primary" variant={matches ? "h3" : "h5"}>
        {title}
      </Typography>
      <Grid item xs={12} md={8} style={{ alignSelf: "center" }}>
        <Typography color="secondary" variant={matches ? "h5" : "body1"}>
          {subtitle}
        </Typography>
      </Grid>
    </Box>
  );
}
