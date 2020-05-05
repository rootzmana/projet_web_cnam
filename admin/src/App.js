import React from "react";
import { HydraAdmin, ResourceGuesser } from "@api-platform/admin";
import CreateConstants from "./Components/constants/CreateConstants";
import EditConstants from "./Components/constants/EditConstants";
import ShowConstants from "./Components/constants/ShowConstants";
import ListConstants from "./Components/constants/ListConstants";

import CreateProjects from "./Components/projects/CreateProjects";
import EditProjects from "./Components/projects/EditProjects";
import ShowProjects from "./Components/projects/ShowProjects";
import ListProjects from "./Components/projects/ListProjects";

import CreateSkills from "./Components/skills/CreateSkills";
import EditSkills from "./Components/skills/EditSkills";
import ShowSkills from "./Components/skills/ShowSkills";
import ListSkills from "./Components/skills/ListSkills";

export default () => (
  <HydraAdmin entrypoint={process.env.REACT_APP_API_ENTRYPOINT}>
    <ResourceGuesser
      name="constants"
      create={CreateConstants}
      edit={EditConstants}
      show={ShowConstants}
      list={ListConstants}
    />
    <ResourceGuesser
      name="projects"
      create={CreateProjects}
      edit={EditProjects}
      show={ShowProjects}
      list={ListProjects}
    />
    <ResourceGuesser
      name="skills"
      create={CreateSkills}
      edit={EditSkills}
      show={ShowSkills}
      list={ListSkills}
    />
  </HydraAdmin>
);
