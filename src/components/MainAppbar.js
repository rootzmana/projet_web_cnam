import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Menu, MenuItem, Divider } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-scroll";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
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
  const [anchorEl, setAnchorEl] = useState(null);

  const matches = useMediaQuery("(min-width:600px)");

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
    if (matches) {
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
                  <Typography variant="h4">
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
    } else {
      const open = Boolean(anchorEl);

      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };
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
                  <Typography variant="h6">
                    {data.AppBar_MainTitle.value}
                  </Typography>
                </Link>
                <div>
                  <IconButton onClick={handleMenu} color="inherit">
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <AppBarMenuItem
                      to="about_section"
                      label={data.AppBar_AboutButtonLabel.value}
                      handleClose={handleClose}
                    />
                    <Divider />
                    <AppBarMenuItem
                      to="skills_section"
                      label={data.AppBar_SkillsButtonLabel.value}
                      handleClose={handleClose}
                    />
                    <Divider />
                    <AppBarMenuItem
                      to="projects_section"
                      label={data.AppBar_ProjectsButtonLabel.value}
                      handleClose={handleClose}
                    />
                    <Divider />
                    <AppBarMenuItem
                      to="contact_section"
                      label={data.AppBar_ContactButtonLabel.value}
                      handleClose={handleClose}
                    />
                  </Menu>
                </div>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
        </div>
      );
    }
  }
}

function AppBarButton({ to, label }) {
  return (
    <Link to={to} spy={true} smooth={true} duration={500}>
      <Button color="inherit">{label}</Button>
    </Link>
  );
}

function AppBarMenuItem({ to, label, handleClose }) {
  return (
    <Link to={to} spy={true} smooth={true} duration={500}>
      <MenuItem onClick={handleClose}>{label} </MenuItem>
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
    const constant = constants.filter((c) => c.key === key);

    resObject[key] = {
      value: constant[0].value,
      type: constant[0].type,
    };
  });
  return resObject;
}
