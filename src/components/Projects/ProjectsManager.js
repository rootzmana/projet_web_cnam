import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default function ProjectsManager({ projects }) {
  const [selected, setSelected] = useState("project-0");

  const manageSelection = (index) => {
    setSelected(`project-${index}`);
  };

  const classes = useStyles();
  return (
    <>
      <Grid item xs={3}>
        {projects.map((p, index) => {
          return (
            <>
              <ProjectCard
                title={p.name}
                selected={`project-${index}` === selected}
                onClick={() => manageSelection(index)}
                key={`project-${index}`}
              />
            </>
          );
        })}
      </Grid>
    </>
  );
}
