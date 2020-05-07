import React from "react";
import { ShowGuesser, FieldGuesser } from "@api-platform/admin";
import { useShowController } from "react-admin";
import DisplayMedia from "../shared/DisplayMedia";

const ShowSkills = (props) => {
  const { record } = useShowController(props);

  if (record === undefined) {
    return null;
  }

  return (
    <ShowGuesser {...props}>
      <FieldGuesser source="name" addLabel={true} />
      <FieldGuesser source="parent" addLabel={true} />
      <FieldGuesser source="skills" addLabel={true} />
      <FieldGuesser source="linkUrl" addLabel={true} />
      <DisplayMedia mediaId={record.image} />
    </ShowGuesser>
  );
};

export default ShowSkills;
