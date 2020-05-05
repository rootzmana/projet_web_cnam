import React from "react";
import { CreateGuesser, InputGuesser } from "@api-platform/admin";

const CreateConstants = (props) => (
  <CreateGuesser {...props}>
    <InputGuesser source="key" />
    <InputGuesser source="value" />
    <InputGuesser source="type" />
  </CreateGuesser>
);

export default CreateConstants;
