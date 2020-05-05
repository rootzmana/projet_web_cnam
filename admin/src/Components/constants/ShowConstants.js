import React from "react";
import { ShowGuesser, FieldGuesser } from "@api-platform/admin";

const ShowConstants = (props) => (
  <ShowGuesser {...props}>
    <FieldGuesser source="key" addLabel={true} />
    <FieldGuesser source="value" addLabel={true} />
    <FieldGuesser source="type" addLabel={true} />
  </ShowGuesser>
);

export default ShowConstants;
