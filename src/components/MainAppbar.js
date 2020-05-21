import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-scroll";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "initial",
    cursor: "pointer",
  },
}));

const KEYS = [
  "AppBar_MainTitle",
  "AppBar_AboutButtonLabel",
  "AppBar_SkillsButtonLabel",
  "AppBar_ProjectsButtonLabel",
  "AppBar_ContactButtonLabel",
];

export default function MainAppBar() {
  const classes = useStyles();

  const [constants, setConstants] = useState();

  async function fetchData() {
    const res = await fetch(
      process.env.REACT_APP_API_ENTRYPOINT + "/constants"
    );
    res.json().then((res) => setConstants(res));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (constants === undefined) {
    return (
      <AppBar>
        <Toolbar />
      </AppBar>
    );
  } else {
    const data = getDataForAppBar(constants);

    return (
      <div className={classes.root}>
        <HideOnScroll>
          <AppBar>
            <Toolbar>
              <Link
                to="home_section"
                spy={true}
                smooth={true}
                className={classes.title}
              >
                <Typography variant="h4" component="a">
                  {data.AppBar_MainTitle.value}
                </Typography>
              </Link>
              <AppBarButton
                to="about_section"
                label={data.AppBar_AboutButtonLabel.value}
              />
              <AppBarButton
                to="skills_section"
                label={data.AppBar_SkillsButtonLabel.value}
              />
              <AppBarButton
                to="projects_section"
                label={data.AppBar_ProjectsButtonLabel.value}
              />
              <AppBarButton
                to="contact_section"
                label={data.AppBar_ContactButtonLabel.value}
              />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </div>
    );
  }
}

function AppBarButton({ to, label }) {
  return (
    <Link to={to} spy={true} smooth={true} duration={500}>
      <Button color="inherit">{label}</Button>
    </Link>
  );
}

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function getDataForAppBar(array) {
  const constants = array["hydra:member"].filter((c) =>
    c.key.includes("AppBar")
  );
  var resObject = {};
  KEYS.forEach((key) => {
    console.log("key", key);
    const constant = constants.filter((c) => c.key === key);

    resObject[key] = {
      value: constant[0].value,
      type: constant[0].type,
    };
  });
  return resObject;
}
