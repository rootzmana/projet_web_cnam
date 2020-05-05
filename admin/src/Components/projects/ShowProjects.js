import React from "react";
import { ShowGuesser, FieldGuesser } from "@api-platform/admin";

const ShowProjects = (props) => (
  <ShowGuesser {...props}>
    <FieldGuesser source="name" addLabel={true} />
    <FieldGuesser source="description" addLabel={true} />
    <FieldGuesser source="skills" addLabel={true} />
    <FieldGuesser source="linkUrl" addLabel={true} />
  </ShowGuesser>
);

export default ShowProjects;
