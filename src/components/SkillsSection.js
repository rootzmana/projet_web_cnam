import React from "react";
import AboutTitle from "./About/AboutTitle";
import { Fade, Grid } from "@material-ui/core";

export default function SkillsSection() {
  return (
    <Fade in timeout={1000}>
      <Grid container>
        <AboutTitle
          title="Mes compétences"
          subtitle="Vous pourrez trouver ci-dessous les différents langages informatiques que je maîtrise. Je souhaite élargir un peu plus chaque jour ma culture informatique. Je ne cherche qu'à apprendre et à gagner en expérience."
        />
      </Grid>
    </Fade>
  );
}
