import React from "react";
import "./App.css";
import MainAppBar from "./components/MainAppbar";

function App() {
  return (
    <div className="App">
      <MainAppBar />
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
  );
}

export default App;
