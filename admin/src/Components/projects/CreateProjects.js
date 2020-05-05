import React from "react";
import { CreateGuesser, InputGuesser } from "@api-platform/admin";

const CreateProjects = (props) => (
  <CreateGuesser {...props}>
    <InputGuesser source="name" />
    <InputGuesser source="description" />
    <InputGuesser source="skills" />
    <InputGuesser source="linkUrl" />
  </CreateGuesser>
);

export default CreateProjects;
