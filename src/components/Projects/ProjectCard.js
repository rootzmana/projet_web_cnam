import React, { useState, useEffect } from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: 60,
    display: "flex",
    alignItems: "center",
    padding: "0.5em",
    marginBottom: "1em",
  },
  img: {
    maxWidth: "50px",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ProjectCard({ title, selected, onClick, subSkills }) {
  const classes = useStyles();
  const [elevation, setElevation] = useState(selected ? 10 : 1);
  const [bgColor, setBgColor] = useState(selected ? "#0277bc" : "#ffffff");
  const [color, setColor] = useState(selected ? "#ffffff" : "#01579b");

  const matches = useMediaQuery("(min-width:960px)");

  useEffect(() => {
    if (selected) {
      setElevation(10);
      setBgColor("#0277bc");
      setColor("#ffffff");
    } else {
      setElevation(1);
      setBgColor("#ffffff");
      setColor("#01579b");
    }
  }, [selected]);

  return (
    <Paper
      className={classes.root}
      elevation={subSkills ? 1 : elevation}
      onMouseOver={() => setElevation(10)}
      onMouseOut={() => setElevation(selected ? 10 : 1)}
      onClick={onClick}
      style={{ backgroundColor: bgColor, width: matches ? "100%" : "25%" }}
    >
      <Typography
        variant={matches ? "h5" : "body2"}
        className={classes.title}
        style={{ color: color }}
      >
        {title}
      </Typography>
    </Paper>
  );
}
