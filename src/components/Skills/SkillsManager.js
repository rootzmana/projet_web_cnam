import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import SkillCard from "./SkillCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default function SkillsManager({ skills }) {
  const [selected, setSelected] = useState();
  const classes = useStyles();
  return (
    <Grid item xs={6} className={classes.root}>
      {skills.map((skill, index) => {
        return (
          <SkillCard
            title={skill.title}
            logoUrl={skill.logoUrl}
            rating={skill.rating}
            selected={`skill-${index}` === selected}
            onClick={() => setSelected(`skill-${index}`)}
          />
        );
      })}
    </Grid>
  );
}
