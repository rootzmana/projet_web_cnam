import React from "react";
import { ListGuesser, FieldGuesser } from "@api-platform/admin";

const ListProjects = (props) => (
  <ListGuesser {...props}>
    <FieldGuesser source="name" />
    <FieldGuesser source="description" />
    <FieldGuesser source="skills" />
    <FieldGuesser source="linkUrl" />
  </ListGuesser>
);

export default ListProjects;
