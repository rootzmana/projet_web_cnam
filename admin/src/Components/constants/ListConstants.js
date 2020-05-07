import React from "react";
import { ListGuesser, FieldGuesser } from "@api-platform/admin";
import { TextField, RichTextField } from "react-admin";

const ListConstants = (props) => (
  <ListGuesser {...props}>
    <FieldGuesser source="key" />
    <FieldGuesser source="type" />
    <RichTextField source="value" />
    <TextField source="file" />
  </ListGuesser>
);

export default ListConstants;
