import React from "react";
import { CreateGuesser } from "@api-platform/admin";
import { FileInput, FileField } from "react-admin";

const CreateMediaObjects = (props) => (
  <CreateGuesser {...props}>
    <FileInput source="file" accept="application/pdf">
      <FileField source="src" title="title" />
    </FileInput>
  </CreateGuesser>
);

export default CreateMediaObjects;
