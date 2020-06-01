import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function ProjectDetail({ project }) {
  const matches = useMediaQuery("(min-width:960px)");

  if (matches) {
    return (
      <>
        <Grid item xs={4}>
          <img
            src={project.image}
            alt={project.name}
            style={{ width: "100%" }}
          />
          <Typography
            variant="h6"
            color="primary"
            align="justify"
            style={{ marginTop: "1em" }}
          >
            Compétences utilisées
          </Typography>
          <ul style={{ textAlign: "justify", marginTop: 0 }}>
            {project.skills.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" color="primary" align="justify">
            {project.name}
          </Typography>
          <div
            dangerouslySetInnerHTML={{ __html: project.description }}
            style={{ textAlign: "justify" }}
          />
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <Grid item xs={12}>
          <Typography
            color="primary"
            align="justify"
            variant="h6"
            style={{ marginBottom: "1em" }}
          >
            {project.name}
          </Typography>
          <img
            src={project.image}
            alt={project.name}
            style={{ width: "100%" }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: project.description }}
            style={{ textAlign: "justify" }}
          />
          <Typography
            variant="body1"
            color="primary"
            align="justify"
            style={{ marginTop: "1em" }}
          >
            Compétences utilisées
          </Typography>
          <ul style={{ textAlign: "justify", marginTop: 0 }}>
            {project.skills.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </Grid>
      </>
    );
  }
}
