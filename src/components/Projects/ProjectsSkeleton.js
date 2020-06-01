import React from "react";
import { Box, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function ProjectsSkeleton() {
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
      <Grid container style={{ justifyContent: "center" }}>
        <Grid
          container
          item
          xs={12}
          style={{ padding: "1em", justifyContent: "center" }}
          spacing={6}
        >
          <Grid
            item
            md={3}
            xs={12}
            style={
              !matches
                ? {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                  }
            }
          >
            <Skeleton
              variant="rect"
              width={matches ? "100%" : "25%"}
              height="80px"
              style={{ marginBottom: "1em" }}
            />
            <Skeleton
              variant="rect"
              width={matches ? "100%" : "25%"}
              height="80px"
              style={{ marginBottom: "1em" }}
            />
            <Skeleton
              variant="rect"
              width={matches ? "100%" : "25%"}
              height="80px"
              style={{ marginBottom: "1em" }}
            />
          </Grid>
          <Grid item container md={9} xs={12} spacing={3}>
            {matches ? (
              <ProjectDetailSkeletonDesktop />
            ) : (
              <ProjectDetailSkeletonMobile />
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

function ProjectDetailSkeletonDesktop() {
  return (
    <>
      <Grid item xs={4}>
        <Skeleton
          variant="rect"
          width={"100%"}
          height="300px"
          style={{ marginBottom: "1em" }}
        />
        <Skeleton variant="text" height="30px" width="200px" />
        <Skeleton variant="text" width="100px" />
        <Skeleton variant="text" width="100px" />
        <Skeleton variant="text" width="100px" />
      </Grid>
      <Grid item xs={8}>
        <Skeleton variant="text" height="50px" width="200px" />
        <Skeleton variant="rect" height="300px" width="100%" />
        <Box
          display="flex"
          width="100%"
          height="fit-content"
          justifyContent="center"
        >
          <Skeleton
            variant="rect"
            height="40px"
            width="100px"
            style={{ margin: "1em" }}
          />
        </Box>
      </Grid>
    </>
  );
}

function ProjectDetailSkeletonMobile() {
  return (
    <>
      <Skeleton variant="text" height="50px" width="200px" />
      <Skeleton
        variant="rect"
        width={"100%"}
        height="300px"
        style={{ marginBottom: "1em" }}
      />
      <Skeleton variant="rect" height="300px" width="100%" />
      <Skeleton
        variant="rect"
        width="100%"
        height="150px"
        style={{ marginBottom: "1em" }}
      />
      <Box display="flex" flexDirection="column">
        <Skeleton variant="text" height="30px" width="200px" />
        <Skeleton variant="text" width="100px" />
        <Skeleton variant="text" width="100px" />
        <Skeleton variant="text" width="100px" />
      </Box>
      <Box
        display="flex"
        width="100%"
        height="fit-content"
        justifyContent="center"
      >
        <Skeleton
          variant="rect"
          height="40px"
          width="100px"
          style={{ margin: "1em" }}
        />
      </Box>
    </>
  );
}
