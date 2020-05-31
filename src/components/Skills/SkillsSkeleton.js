import React from "react";
import { Box, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default function SkillsSkeleton() {
  const classes = useStyles();

  const matches = useMediaQuery("(min-width:960px)");

  return (
    <>
      <Box
        display="flex"
        justifyItems="center"
        flexDirection="column"
        margin={3}
      >
        <Skeleton
          variant="text"
          width={matches ? "300px" : "200px"}
          height="80px"
          style={{ alignSelf: "center" }}
        />
        <Skeleton
          variant="text"
          width={matches ? "600px" : "300px"}
          height="40px"
          style={{ alignSelf: "center" }}
        />
        <Skeleton
          variant="text"
          width={matches ? "600px" : "300px"}
          height="40px"
          style={{ alignSelf: "center" }}
        />
      </Box>
      <Grid container item xs={12} style={{ padding: "1em" }}>
        <Grid item xs={6} className={classes.root}>
          <Skeleton
            variant="rect"
            width="80%"
            height="80px"
            style={{ alignSelf: "center", margin: "1em" }}
          />
          <Skeleton
            variant="rect"
            width="80%"
            height="80px"
            style={{ alignSelf: "center", margin: "1em" }}
          />
          <Skeleton
            variant="rect"
            width="80%"
            height="80px"
            style={{ alignSelf: "center", margin: "1em" }}
          />
        </Grid>
        <Grid item xs={6} className={classes.root}>
          <Skeleton
            variant="rect"
            width="80%"
            height="80px"
            style={{ alignSelf: "center", margin: "1em" }}
          />
          <Skeleton
            variant="rect"
            width="80%"
            height="80px"
            style={{ alignSelf: "center", margin: "1em" }}
          />
          <Skeleton
            variant="rect"
            width="80%"
            height="80px"
            style={{ alignSelf: "center", margin: "1em" }}
          />
        </Grid>
      </Grid>
    </>
  );
}
