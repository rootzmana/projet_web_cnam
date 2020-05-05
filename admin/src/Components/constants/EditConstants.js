import React from "react";
import { EditGuesser, InputGuesser } from "@api-platform/admin";

const EditConstants = (props) => (
  <EditGuesser {...props}>
    <InputGuesser source="key" />
    <InputGuesser source="value" />
    <InputGuesser source="type" />
  </EditGuesser>
);

export default EditConstants;
