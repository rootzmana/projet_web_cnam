import React from "react";
import { EditGuesser, InputGuesser } from "@api-platform/admin";

const EditProjects = (props) => (
  <EditGuesser {...props}>
    <InputGuesser source="name" />
    <InputGuesser source="description" />
    <InputGuesser source="skills" />
    <InputGuesser source="linkUrl" />
  </EditGuesser>
);

export default EditProjects;
