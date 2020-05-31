import React, { useState, useEffect } from "react";
import { Typography, Paper } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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

export default function SkillCard({
  title,
  logoUrl,
  rating,
  selected,
  onClick,
  subSkills,
}) {
  const classes = useStyles();
  const [elevation, setElevation] = useState(selected && !subSkills ? 5 : 1);

  const matches = useMediaQuery("(min-width:960px)");

  useEffect(() => {
    if (selected) {
      setElevation(5);
    } else {
      setElevation(1);
    }
  }, [selected]);

  return (
    <Paper
      className={classes.root}
      elevation={subSkills ? 1 : elevation}
      onMouseOver={() => setElevation(5)}
      onMouseOut={() => setElevation(selected ? 5 : 1)}
      onClick={onClick}
      style={{
        flexDirection: matches ? "row" : "column",
      }}
    >
      {matches && (
        <img src={logoUrl} className={classes.img} alt={`skills ${title}`} />
      )}
      <Typography
        variant={!matches ? "body1" : subSkills ? "h6" : "h5"}
        className={classes.title}
        color="primary"
      >
        {title}
      </Typography>
      <Rating value={rating} precision={0.5} readOnly size="large" />
    </Paper>
  );
}
