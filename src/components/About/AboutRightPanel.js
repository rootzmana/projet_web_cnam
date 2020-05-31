import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function AboutRightPanel({ content, title }) {
  const matches = useMediaQuery("(min-width:960px)");

  return (
    <Box
      display="flex"
      width="100%"
      marginLeft={matches ? "5em" : "0em"}
      textAlign="justify"
      flexDirection="column"
    >
      <Grid item md={12} lg={11}>
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
