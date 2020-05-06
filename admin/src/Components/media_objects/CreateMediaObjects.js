import React from "react";
import { FileInput, FileField, Create, SimpleForm } from "react-admin";

const CreateMediaObjects = (props) => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <FileInput source="file" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);

export default CreateMediaObjects;
