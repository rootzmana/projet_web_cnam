import React, { useState } from "react";
import {
  TextField,
  FormControl,
  Grid,
  Button,
  Box,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
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
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [snackBarOpen, openSnackBar] = useState(false);
  const [sendMailResult, setSendingMailResult] = useState();

  const onMailChange = (value) => {
    setMail(value);
    if (validateEmail(value)) {
      setMailError(false);
    } else {
      setMailError(true);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const params = `mail=${mail}&subject=${subject}&content=${content}&captcha=${captcha}`;
    fetch(`${process.env.REACT_APP_API_ENTRYPOINT}/email?${params}`, {
      method: "GET",
    })
      .then(function (response) {
        if (response.ok && response.status != 400) {
          setSendingMailResult(true);
          openSnackBar(true);
        } else {
          console.log(response);
          setSendingMailResult(false);
          openSnackBar(true);
        }
      })
      .catch(function (error) {
        setSendingMailResult(false);
        openSnackBar(true);
        console.log(
          "Il y a eu un problème avec l'opération fetch: " + error.message
        );
      });
  };

  return (
    <Fade in timeout={1500}>
      <Grid container style={{ justifyContent: "center" }}>
        <AboutTitle title="Contactez moi !" />
        <Grid item xs={12} lg={6}>
          <form onSubmit={onSubmit}>
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
                onChange={(e) => setSubject(e.target.value)}
              />
              <TextField
                id="content"
                name="content"
                multiline
                variant="outlined"
                label="Contenu du message"
                required
                rows={10}
                className={classes.margin}
                onChange={(e) => setContent(e.target.value)}
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
                  verifyCallback={(r) => setCaptcha(r)}
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
          <Snackbar
            open={snackBarOpen}
            autoHideDuration={6000}
            onClose={() => openSnackBar(false)}
          >
            <Alert
              onClose={() => openSnackBar(false)}
              severity={sendMailResult ? "success" : "error"}
            >
              {sendMailResult
                ? "Email envoyé"
                : "Erreur dans l'envoi de l'email. Merci de réessayer plus tard."}
            </Alert>
          </Snackbar>
        </Grid>
      </Grid>
    </Fade>
  );
}

function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
