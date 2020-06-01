import React, { useState, useEffect } from "react";
import AboutTitle from "./About/AboutTitle";
import { Fade, Grid } from "@material-ui/core";
import ProjectsManager from "./Projects/ProjectsManager";
import ProjectsSkeleton from "./Projects/ProjectsSkeleton";

export default function ProjectsSection() {
  const [projects, setProjects] = useState();
  const [skills, setSkills] = useState();
  const [files, setFiles] = useState();

  async function fetchData() {
    const skills = await fetch(
      process.env.REACT_APP_API_ENTRYPOINT + "/skills"
    );
    skills.json().then((res) => setSkills(res["hydra:member"]));

    const files = await fetch(
      process.env.REACT_APP_API_ENTRYPOINT + "/media_objects"
    );
    files.json().then((res) => setFiles(res["hydra:member"]));

    const projects = await fetch(
      process.env.REACT_APP_API_ENTRYPOINT + "/projects"
    );
    projects.json().then((res) => setProjects(res["hydra:member"]));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (projects === undefined || skills === undefined || files === undefined) {
    return <ProjectsSkeleton />;
  } else {
    const data = mapApiProjects(projects, files, skills);

    return (
      <Fade in timeout={1000}>
        <Grid container style={{ justifyContent: "center" }}>
          <AboutTitle
            title="Mes projet"
            subtitle="C'est ici que je conserve mes travaux réalisés dans le cadre de mes études ou personnellement. Je compte bien allonger la liste au fil du temps !"
          />
          <Grid
            container
            item
            xs={12}
            style={{ padding: "1em", justifyContent: "center" }}
            spacing={6}
          >
            <ProjectsManager projects={data} />
          </Grid>
        </Grid>
      </Fade>
    );
  }
}
function mapApiProjects(projects, files, skills) {
  var res = [];
  // eslint-disable-next-line
  projects.map((p, index) => {
    res[index] = {
      name: p.name,
      description: p.description,
      linkUrl: p.linkUrl,
      image: getImageForId(p.image, files),
      skills: getSkillsForProject(p.skills, skills),
    };
  });
  return res;
}

function getImageForId(id, files) {
  const image = files.filter((f) => id === f["@id"]);
  return process.env.REACT_APP_API_ENTRYPOINT + image[0].contentUrl;
}

function getSkillsForProject(projetSkills, skills) {
  var res = [];
  // eslint-disable-next-line
  projetSkills.map((p, index) => {
    const skill = skills.filter((sub) => sub["@id"] === p);

    res[index] = skill[0].name;
  });
  return res;
}
