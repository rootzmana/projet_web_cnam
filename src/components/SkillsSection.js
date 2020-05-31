import React from "react";
import AboutTitle from "./About/AboutTitle";
import { Fade, Grid, Box, Typography, Paper } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import SkillCard from "./Skills/SkillCard";

export default function SkillsSection() {
  return (
    <Fade in timeout={1000}>
      <Grid container>
        <AboutTitle
          title="Mes compétences"
          subtitle="Vous pourrez trouver ci-dessous les différents langages informatiques que je maîtrise. Je souhaite élargir un peu plus chaque jour ma culture informatique. Je ne cherche qu'à apprendre et à gagner en expérience."
        />
        <Grid item xs={12} style={{ padding: "1em" }}>
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <SkillCard
              title="Développement Web"
              logoUrl="https://img2.freepng.fr/20180525/wvw/kisspng-web-development-logo-computer-programming-5b07d5d4af2bb4.0642809515272401487175.jpg"
              rating={4}
            />
            <SkillCard
              title="Gestion de Projet"
              logoUrl="https://img2.freepng.fr/20180525/wvw/kisspng-web-development-logo-computer-programming-5b07d5d4af2bb4.0642809515272401487175.jpg"
              rating={3.5}
            />
            <SkillCard
              title="Développement mobile"
              logoUrl="https://img2.freepng.fr/20180525/wvw/kisspng-web-development-logo-computer-programming-5b07d5d4af2bb4.0642809515272401487175.jpg"
              rating={4.5}
            />
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  );
}
