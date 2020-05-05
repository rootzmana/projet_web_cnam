import React from "react";
import { ListGuesser, FieldGuesser } from "@api-platform/admin";

const ListSkills = (props) => (
  <ListGuesser {...props}>
    <FieldGuesser source="name" />
    <FieldGuesser source="parent" />
    <FieldGuesser source="skills" />
    <FieldGuesser source="rating" />
  </ListGuesser>
);

export default ListSkills;
