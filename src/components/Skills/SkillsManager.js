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
  const [selected, setSelected] = useState("skill-0");
  const [subskills, setSubskills] = useState(skills[0].subSkills);

  const manageSelection = (index) => {
    setSelected(`skill-${index}`);
    setSubskills(skills[index].subSkills);
  };

  const classes = useStyles();
  return (
    <>
      <Grid item xs={6} className={classes.root}>
        {skills.map((skill, index) => {
          return (
            <SkillCard
              title={skill.title}
              logoUrl={skill.logoUrl}
              rating={skill.rating}
              selected={`skill-${index}` === selected}
              onClick={() => manageSelection(index)}
              key={`skill-${index}`}
            />
          );
        })}
      </Grid>
      <Grid item xs={6} className={classes.root}>
        {subskills.map((skill, index) => {
          return (
            <SkillCard
              title={skill.title}
              logoUrl={skill.logoUrl}
              rating={skill.rating}
              subSkills
              key={`skill-${index}`}
            />
          );
        })}
      </Grid>
    </>
  );
}
