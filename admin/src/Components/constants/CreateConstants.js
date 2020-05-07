import React from "react";
import { CreateGuesser, InputGuesser } from "@api-platform/admin";
import TypeRadioInput from "./TypeRadioInput";
import { FormDataConsumer, required } from "react-admin";
import ValueInput from "./ValueInput";

const CreateConstants = (props) => {
  return (
    <CreateGuesser {...props}>
      <InputGuesser source="key" validate={required()} />
      <TypeRadioInput source="type" validate={required()} />
      <FormDataConsumer>
        {({ formData, ...rest }) => (
          <ValueInput type={formData.type} {...rest} />
        )}
      </FormDataConsumer>
    </CreateGuesser>
  );
};

export default CreateConstants;
