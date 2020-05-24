import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
    margin: theme.spacing(1),
  },
}));

export default function HomeSection() {
  const classes = useStyles();

  const [constants, setConstants] = useState();

  async function fetchData() {
    const res = await fetch(
      process.env.REACT_APP_API_ENTRYPOINT + "/constants"
    );
    res.json().then((res) => setConstants(res));
  }

  const matches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    fetchData();
  }, []);

  if (constants === undefined) {
    return null;
  } else {
    const data = getDataForHomeSection(constants);

    return (
      <Fade in timeout={1500}>
        <Box className={classes.root}>
          <Typography variant={matches ? "h1" : "h3"} className={classes.text}>
            {data.Home_Title.value}
          </Typography>
          <Typography variant={matches ? "h2" : "h4"} className={classes.text}>
            {data.Home_Subtitle.value}
          </Typography>
        </Box>
      </Fade>
    );
  }
}

const KEYS = ["Home_Title", "Home_Subtitle"];

function getDataForHomeSection(array) {
  const constants = array["hydra:member"].filter((c) => c.key.includes("Home"));
  var resObject = {};
  KEYS.forEach((key) => {
    const constant = constants.filter((c) => c.key === key);

    resObject[key] = {
      value: constant[0].value,
      type: constant[0].type,
    };
  });
  return resObject;
}
