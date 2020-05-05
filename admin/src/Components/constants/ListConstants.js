import React from "react";
import { ListGuesser, FieldGuesser } from "@api-platform/admin";

const ListConstants = (props) => (
  <ListGuesser {...props}>
    <FieldGuesser source="key" />
    <FieldGuesser source="value" />
    <FieldGuesser source="type" />
  </ListGuesser>
);

export default ListConstants;
