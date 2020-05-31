import React, { useState } from "react";
import { Typography, Paper } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "80%",
    height: 80,
    display: "flex",
    border: 1,
    alignItems: "center",
    borderColor: "primary.main",
    padding: "0.5em",
    margin: "1em",
  },
  img: {
    maxWidth: "50px",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function SkillCard({ title, logoUrl, rating }) {
  const classes = useStyles();

  const [elevation, setElevation] = useState(1);

  return (
    <Paper
      className={classes.root}
      elevation={elevation}
      onMouseOver={() => setElevation(5)}
      onMouseOut={() => setElevation(1)}
    >
      <img src={logoUrl} className={classes.img} alt={`skills ${title}`} />
      <Typography variant="h5" className={classes.title} color="primary">
        {title}
      </Typography>
      <Rating defaultValue={rating} precision={0.5} readOnly />
    </Paper>
  );
}
