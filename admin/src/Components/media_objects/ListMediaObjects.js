import React from "react";
import { ListGuesser, FieldGuesser } from "@api-platform/admin";

const ListMediaObjects = (props) => (
  <ListGuesser {...props}>
    <FieldGuesser source="contentUrl" />
  </ListGuesser>
);

export default ListMediaObjects;
