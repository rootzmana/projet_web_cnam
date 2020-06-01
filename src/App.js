import React from "react";
import "./App.css";
import MainAppBar from "./components/MainAppbar";
import { ThemeProvider } from "@material-ui/core";
import { myTheme } from "./components/myCustomTheme";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <MainAppBar />
        <div id="home_section" className="Home">
          <HomeSection />
        </div>
        <div id="about_section" className="Section">
          <AboutSection />
        </div>
        <div id="skills_section" className="Section Skills">
          <SkillsSection />
        </div>
        <div id="projects_section" className="Section Skills">
          <ProjectsSection />
        </div>
        <div id="contact_section" className="Section">
          contact
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
