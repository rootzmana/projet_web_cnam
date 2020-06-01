import React, { useState, useEffect } from "react";
import AboutTitle from "./About/AboutTitle";
import { Fade, Grid } from "@material-ui/core";

import SkillsManager from "./Skills/SkillsManager";
import SkillsSkeleton from "./Skills/SkillsSkeleton";

export default function SkillsSection() {
  const [apiSkills, setApiSkills] = useState();
  const [files, setFiles] = useState();

  async function fetchData() {
    const res = await fetch(process.env.REACT_APP_API_ENTRYPOINT + "/skills");
    res.json().then((res) => setApiSkills(res["hydra:member"]));

    const files = await fetch(
      process.env.REACT_APP_API_ENTRYPOINT + "/media_objects"
    );
    files.json().then((res) => setFiles(res["hydra:member"]));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (apiSkills === undefined || files === undefined) {
    return <SkillsSkeleton />;
  } else {
    const skills = mapApiSkillsToSkills(apiSkills, files);

    return (
      <Fade in timeout={1000}>
        <Grid container>
          <AboutTitle
            title="Mes compétences"
            subtitle="Vous pourrez trouver ci-dessous les différents langages informatiques que je maîtrise. Je souhaite élargir un peu plus chaque jour ma culture informatique. Je ne cherche qu'à apprendre et à gagner en expérience."
          />
          <Grid container item xs={12} style={{ padding: "1em" }}>
            <SkillsManager skills={skills} />
          </Grid>
        </Grid>
      </Fade>
    );
  }
}

function mapApiSkillsToSkills(apiSkills, files) {
  const parentSkills = apiSkills.filter((s) => s.skills.length > 0);
  const subSkills = apiSkills.filter((s) => s.skills.length === 0);
  var res = [];
  parentSkills.map((parent, index) => {
    res[index] = {
      title: parent.name,
      rating: parent.rating,
      logoUrl: getImageForId(parent.image, files),
      subSkills: getSubskillsForParent(parent.skills, subSkills, files),
    };
  });
  return res;
}

function getImageForId(id, files) {
  const image = files.filter((f) => id === f["@id"]);
  return process.env.REACT_APP_API_ENTRYPOINT + image[0].contentUrl;
}

function getSubskillsForParent(parentArray, allSubskills, files) {
  var res = [];
  parentArray.map((s, index) => {
    console.log("s", s);
    const subSkill = allSubskills.filter((sub) => sub["@id"] === s);
    console.log("subSkill", subSkill);
    res[index] = {
      title: subSkill[0].name,
      rating: subSkill[0].rating,
      logoUrl: getImageForId(subSkill[0].image, files),
    };
  });
  return res;
}
