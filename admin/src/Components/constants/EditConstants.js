import React from "react";
import { EditGuesser, InputGuesser } from "@api-platform/admin";
import TypeRadioInput from "./TypeRadioInput";

const EditConstants = (props) => (
  <EditGuesser {...props}>
    <InputGuesser source="key" />
    <InputGuesser source="value" />
    <TypeRadioInput source="type" />
  </EditGuesser>
);

export default EditConstants;
