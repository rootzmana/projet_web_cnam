import React from "react";
import { CreateGuesser, InputGuesser } from "@api-platform/admin";
import TypeRadioInput from "./TypeRadioInput";

const CreateConstants = (props) => (
  <CreateGuesser {...props}>
    <InputGuesser source="key" />
    <InputGuesser source="value" />
    <TypeRadioInput source="type" />
  </CreateGuesser>
);

export default CreateConstants;
