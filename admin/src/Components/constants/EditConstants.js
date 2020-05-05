import React from "react";
import { EditGuesser, InputGuesser, FieldGuesser } from "@api-platform/admin";

const EditConstants = (props) => (
  <EditGuesser {...props}>
    <InputGuesser source="key" />
    <InputGuesser source="value" />
    <FieldGuesser source="type" addLabel={true} />
  </EditGuesser>
);

export default EditConstants;
