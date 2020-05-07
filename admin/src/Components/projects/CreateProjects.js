import React from "react";
import { CreateGuesser, InputGuesser } from "@api-platform/admin";
import RichTextInput from "ra-input-rich-text";

const CreateProjects = (props) => (
  <CreateGuesser {...props}>
    <InputGuesser source="name" />
    <RichTextInput source="description" />
    <InputGuesser source="skills" />
    <InputGuesser source="linkUrl" />
    <InputGuesser source="image" />
  </CreateGuesser>
);

export default CreateProjects;
