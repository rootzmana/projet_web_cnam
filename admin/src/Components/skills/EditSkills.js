import React from "react";
import { EditGuesser, InputGuesser } from "@api-platform/admin";

const EditSkills = (props) => (
  <EditGuesser {...props}>
    <InputGuesser source="name" />
    <InputGuesser source="parent" />
    <InputGuesser source="skills" />
    <InputGuesser source="rating" />
  </EditGuesser>
);

export default EditSkills;
