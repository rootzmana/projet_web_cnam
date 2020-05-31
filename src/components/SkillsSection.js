import React from "react";
import AboutTitle from "./About/AboutTitle";
import { Fade, Grid } from "@material-ui/core";

import SkillsManager from "./Skills/SkillsManager";
import SkillsSkeleton from "./Skills/SkillsSkeleton";

// ONLY FOR TEST
const logoUrlTest =
  "https://img2.freepng.fr/20180525/wvw/kisspng-web-development-logo-computer-programming-5b07d5d4af2bb4.0642809515272401487175.jpg";
const skills = [
  {
    title: "Développement web",
    rating: 1,
    logoUrl: logoUrlTest,
    subSkills: [
      {
        title: "React",
        rating: 1.5,
        logoUrl: logoUrlTest,
      },
      {
        title: "Api Platform",
        rating: 1.5,
        logoUrl: logoUrlTest,
      },
    ],
  },
  {
    title: "Développement mobile",
    rating: 2,
    logoUrl: logoUrlTest,
    subSkills: [
      {
        title: "iOS",
        rating: 2.5,
        logoUrl: logoUrlTest,
      },
    ],
  },
  {
    title: "Gestion de projet",
    rating: 3,
    logoUrl: logoUrlTest,
    subSkills: [
      {
        title: "Gestion Temps",
        rating: 3.5,
        logoUrl: logoUrlTest,
      },
      {
        title: "Gestion Coût",
        rating: 3.5,
        logoUrl: logoUrlTest,
      },
      {
        title: "Gestion Risque",
        rating: 3.5,
        logoUrl: logoUrlTest,
      },
      {
        title: "Gestion Risque",
        rating: 3.5,
        logoUrl: logoUrlTest,
      },
      {
        title: "Gestion Risque",
        rating: 3.5,
        logoUrl: logoUrlTest,
      },
    ],
  },
];
// END TEST

export default function SkillsSection() {
  if (true) {
    return <SkillsSkeleton />;
  } else {
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
