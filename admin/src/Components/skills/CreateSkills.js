import React from "react";
import { CreateGuesser, InputGuesser } from "@api-platform/admin";

const CreateSkills = (props) => (
  <CreateGuesser {...props}>
    <InputGuesser source="name" />
    <InputGuesser source="parent" />
    <InputGuesser source="skills" />
    <InputGuesser source="rating" />
    <InputGuesser source="image" />
  </CreateGuesser>
);

export default CreateSkills;
