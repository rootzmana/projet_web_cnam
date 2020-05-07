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

import CreateMediaObjects from "./Components/media_objects/CreateMediaObjects";
import ShowMediaObjects from "./Components/media_objects/ShowMediaObjects";
import ListMediaObjects from "./Components/media_objects/ListMediaObjects";

import dataProviderFactory from "@api-platform/admin/src/hydra/dataProvider";
import { myTheme } from "./Components/shared/myCustomTheme";
import MyLayout from "./Components/shared/MyLayout";
const entrypoint = process.env.REACT_APP_API_ENTRYPOINT;

const dataProvider = dataProviderFactory(entrypoint);
const myDataProvider = {
  ...dataProvider,
  create: (resource, params) => {
    if (resource !== "media_objects") {
      return dataProvider.create(resource, params);
    } else {
      const body = new FormData();
      if (params.data.type === "pdf") {
        body.append("file", params.data.file.rawFile);
      } else {
        body.append("file", params.data.picture.rawFile);
      }

      return fetch(`${entrypoint}/media_objects`, {
        body,
        method: "POST",
      }).then((response) => {
        return { data: response.json() };
      });
    }
  },
};

export default () => (
  <HydraAdmin
    entrypoint={process.env.REACT_APP_API_ENTRYPOINT}
    dataProvider={myDataProvider}
    theme={myTheme}
    layout={MyLayout}
  >
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
    <ResourceGuesser
      name="media_objects"
      create={CreateMediaObjects}
      show={ShowMediaObjects}
      list={ListMediaObjects}
    />
  </HydraAdmin>
);
