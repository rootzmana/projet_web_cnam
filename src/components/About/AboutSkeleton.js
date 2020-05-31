import React from "react";
import { Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function AboutSkeleton() {
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
      <Box
        margin={matches ? "2em 7em 0 7em" : "2em"}
        display="flex"
        flexDirection={matches ? "row" : "column"}
      >
        <Box display="flex" flexDirection="column">
          <Skeleton
            variant="circle"
            width="250px"
            height="300px"
            style={{ alignSelf: "center" }}
          />
          <Skeleton
            variant="text"
            width="200px"
            height="30px"
            style={{ alignSelf: "center" }}
          />
          <Skeleton
            variant="text"
            width="200px"
            height="30px"
            style={{ alignSelf: "center" }}
          />
          <Skeleton
            variant="text"
            width="200px"
            height="30px"
            style={{ alignSelf: "center" }}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          marginLeft={matches ? "5em" : "0"}
          marginTop={matches ? "0" : "2em"}
        >
          <Skeleton
            variant="text"
            width={matches ? "500px" : "100%"}
            height="50px"
            style={{ marginBottom: "1em" }}
          />
          <Skeleton
            variant="rect"
            width={matches ? "800px" : "100%"}
            height="300px"
          />
        </Box>
      </Box>
    </>
  );
}
