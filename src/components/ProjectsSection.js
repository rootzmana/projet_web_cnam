import React from "react";
import AboutTitle from "./About/AboutTitle";
import { Fade, Grid } from "@material-ui/core";
import ProjectsManager from "./Projects/ProjectsManager";
import ProjectsSkeleton from "./Projects/ProjectsSkeleton";

// Mock values
const desc =
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at dui in magna scelerisque suscipit rutrum vel mi. Aenean interdum odio nulla. Aliquam erat volutpat. Aliquam sagittis augue at enim pellentesque, non porttitor mi congue. Donec in tortor mi. Sed scelerisque tellus et nisl dictum, efficitur sollicitudin nulla aliquet. Sed pellentesque arcu eget dapibus ultrices. Fusce nec purus maximus, mattis est at, dictum dolor. Proin ullamcorper mauris eu maximus semper. Proin ut molestie est. Maecenas vitae suscipit nulla, vitae tempus odio. Mauris sit amet lacinia risus, quis porttitor sem. Etiam eu arcu lacus. Praesent et odio nec mauris facilisis commodo. Nullam a egestas nunc, nec scelerisque mi.</p><p>Sed scelerisque facilisis tempor. Nulla nec euismod mauris. Vivamus non venenatis turpis, eget fermentum diam. Aenean fringilla efficitur libero, nec viverra libero accumsan sed. Curabitur et vulputate nisl. Etiam scelerisque lorem diam, vel ullamcorper urna congue nec. In blandit viverra mauris vel aliquam. Maecenas lorem mi, dictum eget cursus sit amet, tempor vitae dolor. Maecenas consequat, elit ac ultricies porttitor, nulla sem viverra nibh, malesuada tristique ipsum dui sed arcu. Donec et nisi et ex sagittis aliquet. Phasellus eu leo felis. Aliquam ullamcorper erat id enim mollis varius. Pellentesque lobortis dolor at nisl vulputate, sit amet scelerisque elit blandit. Ut nunc erat, lobortis eget accumsan non, rhoncus ut neque. Nam fringilla nibh sit amet viverra gravida. Mauris metus lectus, accumsan et turpis quis, cursus pharetra mi.</p>";
const img =
  "https://m.economictimes.com/thumb/msid-70158457,width-1200,height-900,resizemode-4,imgsize-113609/lotus-getty.jpg";
const projects = [
  {
    name: "Projet 1",
    description: desc,
    linkUrl: "www.google.fr",
    image: img,
    skills: ["skill 1", "skill 2", "skill 3"],
  },
  {
    name: "Projet 2",
    description: desc,
    linkUrl: "www.google.fr",
    image: img,
    skills: ["skill 1", "skill 2", "skill 3"],
  },
  {
    name: "Projet 3",
    description: desc,
    linkUrl: "www.google.fr",
    image: img,
    skills: ["skill 1", "skill 2", "skill 3"],
  },
  {
    name: "Projet 4",
    description: desc,
    linkUrl: "www.google.fr",
    image: img,
    skills: ["skill 1", "skill 2", "skill 3"],
  },
];
// End mock
export default function ProjectsSection() {
  if (true) {
    return <ProjectsSkeleton />;
  } else {
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
            <ProjectsManager projects={projects} />
          </Grid>
        </Grid>
      </Fade>
    );
  }
}
