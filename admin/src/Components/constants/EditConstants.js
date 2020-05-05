import React from "react";
import { EditGuesser, InputGuesser, FieldGuesser } from "@api-platform/admin";
import { FormDataConsumer, required } from "react-admin";
import ValueInput from "./ValueInput";

const EditConstants = (props) => (
  <EditGuesser {...props}>
    <InputGuesser source="key" validate={required()} />
    <FieldGuesser source="type" addLabel={true} />
    <FormDataConsumer>
      {({ formData, ...rest }) => (
        <ValueInput
          source="value"
          validate={required()}
          type={formData.type}
          {...rest}
        />
      )}
    </FormDataConsumer>
  </EditGuesser>
);

export default EditConstants;
