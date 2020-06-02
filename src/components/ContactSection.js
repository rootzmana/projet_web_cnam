import React, { useState } from "react";
import { TextField, FormControl, Grid, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Icon from "@material-ui/core/Icon";
import AboutTitle from "./About/AboutTitle";
import Recaptcha from "react-recaptcha";

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

  const [mail, setMail] = useState("");
  const [mailError, setMailError] = useState(false);
  const [captcha, setCaptcha] = useState("");

  const onMailChange = (value) => {
    setMail(value);
    if (validateEmail(value)) {
      setMailError(false);
    } else {
      setMailError(true);
    }
  };

  const verifyCallback = function (response) {
    setCaptcha(response);
  };

  return (
    <Fade in timeout={1500}>
      <Grid container style={{ justifyContent: "center" }}>
        <AboutTitle title="Contactez moi !" />
        <Grid item xs={12} lg={6}>
          <form>
            <FormControl className={classes.form}>
              <TextField
                id="mail"
                name="mail"
                label="Adresse mail"
                value={mail}
                required
                helperText={
                  mailError
                    ? "Nécéssite une adresse mail au bon format "
                    : "Je vous recontacterais à cette adresse mail."
                }
                className={classes.mail}
                onChange={(e) => onMailChange(e.target.value)}
                error={mailError}
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
                <Recaptcha
                  sitekey="6Lc1Y_8UAAAAAMif-2R4BpysDsCGFSWrMJg-H08-"
                  hl="fr"
                  verifyCallback={verifyCallback}
                  expiredCallback={() => setCaptcha("")}
                />
                <Button
                  disabled={captcha === "" || mailError}
                  variant="contained"
                  type="submit"
                  color="primary"
                  endIcon={<Icon>send</Icon>}
                  className={classes.button}
                >
                  Envoyer
                </Button>
              </Box>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Fade>
  );
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
