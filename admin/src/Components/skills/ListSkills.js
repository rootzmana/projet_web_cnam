import React from "react";
import { ListGuesser, FieldGuesser } from "@api-platform/admin";
import { TextField } from "react-admin";

const ListSkills = (props) => (
  <ListGuesser {...props}>
    <FieldGuesser source="name" />
    <FieldGuesser source="parent" />
    <FieldGuesser source="skills" />
    <FieldGuesser source="rating" />
    <TextField source="image" />
  </ListGuesser>
);

export default ListSkills;
