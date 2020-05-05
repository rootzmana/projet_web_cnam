import React from "react";
import { RadioButtonGroupInput } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
});

const TypeRadioInput = (props) => {
  const classes = useStyles();

  return (
    <RadioButtonGroupInput
      {...props}
      className={classes.root}
      options={{ value: "plain" }}
      choices={[
        { id: "plain", name: "Plain text" },
        { id: "img", name: "Image" },
        { id: "file", name: "File" },
        { id: "html", name: "HTML" },
      ]}
    />
  );
};

export default TypeRadioInput;
