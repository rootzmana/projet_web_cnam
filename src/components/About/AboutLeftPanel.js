import React from "react";
import { Box, Typography, Grid, IconButton } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles(() => ({
  image: {
    borderRadius: "50%",
    maxWidth: "250px",
  },
}));

export default function AboutLeftPanel({
  img,
  fb,
  insta,
  linkedin,
  cv,
  title,
  subtitle,
}) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Grid item xs={12} md={3} style={{ marginLeft: matches ? "3em" : "0em" }}>
      <img src={img} alt="Moi" className={classes.image} />
      <Typography
        color="primary"
        variant={matches ? "h5" : "h6"}
        style={{ marginTop: "1em" }}
      >
        {title}
      </Typography>
      <Typography color="secondary" variant={matches ? "body1" : "body2"}>
        {subtitle}
      </Typography>
      <Box display="flex" justifyContent="center" width="100%">
        <a href={fb} target="blank">
          <IconButton component="span">
            <FacebookIcon />
          </IconButton>
        </a>
        <a href={insta} target="blank">
          <IconButton component="span">
            <InstagramIcon />
          </IconButton>
        </a>
        <a href={linkedin} target="blank">
          <IconButton component="span">
            <LinkedInIcon />
          </IconButton>
        </a>
        <a href={cv} target="blank">
          <IconButton component="span">
            <DescriptionIcon />
          </IconButton>
        </a>
      </Box>
    </Grid>
  );
}
