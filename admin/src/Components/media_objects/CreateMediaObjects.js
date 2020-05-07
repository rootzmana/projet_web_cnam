import React, { useState } from "react";
import {
  FileInput,
  FileField,
  Create,
  SimpleForm,
  ImageInput,
  ImageField,
  RadioButtonGroupInput,
  required,
} from "react-admin";

const CreateMediaObjects = (props) => {
  const [selectedType, setSelectedType] = useState("img");

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <RadioButtonGroupInput
          source="type"
          choices={[
            { id: "img", name: "Image" },
            { id: "pdf", name: "PDF" },
          ]}
          options={{ onChange: handleChange }}
        />
        {selectedType === "pdf" ? (
          <FileInput
            source="file"
            accept="application/pdf"
            validate={required()}
          >
            <FileField source="src" title="title" />
          </FileInput>
        ) : (
          <ImageInput source="picture" accept="image/*" validate={required()}>
            <ImageField source="src" title="title" />
          </ImageInput>
        )}
      </SimpleForm>
    </Create>
  );
};

export default CreateMediaObjects;
