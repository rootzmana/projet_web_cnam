import React from "react";
import { ListGuesser, FieldGuesser } from "@api-platform/admin";
import { TextField } from "react-admin";

const ListConstants = (props) => (
  <ListGuesser {...props}>
    <FieldGuesser source="key" />
    <FieldGuesser source="type" />
    <FieldGuesser source="value" />
    <TextField source="file" />
  </ListGuesser>
);

export default ListConstants;
