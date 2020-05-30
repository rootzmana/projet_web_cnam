import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function AboutRightPanel({ content, title }) {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box
      display="flex"
      width="100%"
      marginLeft={matches ? "5em" : "0em"}
      textAlign="justify"
      flexDirection="column"
    >
      <Grid item xs={12} md={11}>
        <Typography
          color="primary"
          variant={matches ? "h5" : "h6"}
          style={{
            height: "fit-content",
            textAlign: matches ? "justify" : "center",
          }}
        >
          {title}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </Grid>
    </Box>
  );
}
