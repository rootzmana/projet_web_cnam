import React from "react";
import { ListGuesser, FieldGuesser } from "@api-platform/admin";
import { TextField, RichTextField } from "react-admin";

const ListProjects = (props) => (
  <ListGuesser {...props}>
    <FieldGuesser source="name" />
    <RichTextField source="description" />
    <FieldGuesser source="skills" />
    <FieldGuesser source="linkUrl" />
    <TextField source="image" />
  </ListGuesser>
);

export default ListProjects;
