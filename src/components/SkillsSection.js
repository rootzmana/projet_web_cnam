import React from "react";
import AboutTitle from "./About/AboutTitle";
import { Fade, Grid } from "@material-ui/core";

import SkillsManager from "./Skills/SkillsManager";

// ONLY FOR TEST
const logoUrlTest =
  "https://img2.freepng.fr/20180525/wvw/kisspng-web-development-logo-computer-programming-5b07d5d4af2bb4.0642809515272401487175.jpg";
const skills = [
  {
    title: "Développement web",
    rating: 1,
    logoUrl: logoUrlTest,
    childrens: [],
  },
  {
    title: "Développement mobile",
    rating: 1,
    logoUrl: logoUrlTest,
    childrens: [],
  },
  {
    title: "Gestion de projet",
    rating: 1,
    logoUrl: logoUrlTest,
    childrens: [],
  },
];
// END TEST

export default function SkillsSection() {
  return (
    <Fade in timeout={1000}>
      <Grid container>
        <AboutTitle
          title="Mes compétences"
          subtitle="Vous pourrez trouver ci-dessous les différents langages informatiques que je maîtrise. Je souhaite élargir un peu plus chaque jour ma culture informatique. Je ne cherche qu'à apprendre et à gagner en expérience."
        />
        <Grid item xs={12} style={{ padding: "1em" }}>
          <SkillsManager skills={skills} />
        </Grid>
      </Grid>
    </Fade>
  );
}
