import React from "react";
import { TextField, FormControl, Grid, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Icon from "@material-ui/core/Icon";
import AboutTitle from "./About/AboutTitle";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
  margin: {
    margin: "1em",
  },
  button: {
    margin: "1em",
    width: "fit-content",
  },
  mail: {
    margin: "0 1em 0 1em",
  },
}));

export default function ContactSection() {
  const classes = useStyles();

  return (
    <Fade in timeout={1500}>
      <Grid container style={{ justifyContent: "center" }}>
        <AboutTitle title="Contactez moi !" />
        <Grid item xs={12} lg={6}>
          <FormControl className={classes.form}>
            <TextField
              id="mail"
              name="mail"
              label="Adresse mail"
              required
              helperText="Je vous recontacterais à cette adresse mail."
              className={classes.mail}
            />
            <TextField
              id="subject"
              name="subject"
              label="Objet"
              required
              className={classes.margin}
            />
            <TextField
              id="subject"
              name="subject"
              multiline
              variant="outlined"
              label="Contenu du message"
              required
              rows={10}
              className={classes.margin}
            />
            <Box
              className={classes.margin}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <div
                class="g-recaptcha"
                data-sitekey="6Lc1Y_8UAAAAAMif-2R4BpysDsCGFSWrMJg-H08-"
              ></div>
              <Button
                variant="contained"
                color="primary"
                endIcon={<Icon>send</Icon>}
                className={classes.button}
              >
                Envoyer
              </Button>
            </Box>
          </FormControl>
        </Grid>
      </Grid>
    </Fade>
  );
}
