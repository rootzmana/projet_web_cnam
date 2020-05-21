import React from "react";
import "./App.css";
import MainAppBar from "./components/MainAppbar";
import { ThemeProvider } from "@material-ui/core";
import { myTheme } from "./components/myCustomTheme";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <MainAppBar />
        <div id="home_section" className="Section">
          home
        </div>
        <div id="about_section" className="Section">
          about
        </div>
        <div id="skills_section" className="Section">
          skills
        </div>
        <div id="projects_section" className="Section">
          projects
        </div>
        <div id="contact_section" className="Section">
          contact
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
