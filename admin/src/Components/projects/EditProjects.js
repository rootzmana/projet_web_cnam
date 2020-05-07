import React from "react";
import { EditGuesser, InputGuesser } from "@api-platform/admin";
import RichTextInput from "ra-input-rich-text";

const EditProjects = (props) => (
  <EditGuesser {...props}>
    <InputGuesser source="name" />
    <RichTextInput source="description" />
    <InputGuesser source="skills" />
    <InputGuesser source="linkUrl" />
    <InputGuesser source="image" />
  </EditGuesser>
);

export default EditProjects;
