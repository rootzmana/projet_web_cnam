import React, { useState, Fragment } from "react";
import { Grid } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function ProjectsManager({ projects }) {
  const [selected, setSelected] = useState("project-0");
  const [project, setProject] = useState(projects[0]);
  const matches = useMediaQuery("(min-width:960px)");

  const manageSelection = (index) => {
    setSelected(`project-${index}`);
    setProject(projects[index]);
    console.log(project);
  };

  return (
    <>
      <Grid
        item
        md={3}
        xs={12}
        style={
          !matches
            ? {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }
            : {
                display: "flex",
                flexDirection: "column",
              }
        }
      >
        {projects.map((p, index) => {
          return (
            <Fragment key={`project-${index}`}>
              <ProjectCard
                title={p.name}
                selected={`project-${index}` === selected}
                onClick={() => manageSelection(index)}
              />
            </Fragment>
          );
        })}
      </Grid>
      <Grid item container md={9} xs={12} spacing={3}>
        <ProjectDetail project={project} />
      </Grid>
    </>
  );
}
