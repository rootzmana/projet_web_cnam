import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    minHeight: "inherit",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    color: "white",
  },
}));

export default function HomeSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h1" className={classes.text}>
        Matthieu Desvignes
      </Typography>
      <Typography variant="h2" className={classes.text}>
        Ingénieur informatique
      </Typography>
    </Box>
  );
}
