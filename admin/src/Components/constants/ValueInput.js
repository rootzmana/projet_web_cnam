import React from "react";
import {
  TextInput,
  ImageInput,
  ImageField,
  FileInput,
  FileField,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const ValueInput = ({ type, ...props }) => {
  switch (type) {
    case "plain":
      return <TextInput {...props} />;
    case "img":
      return (
        <ImageInput {...props} accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
      );
    case "html":
      return <RichTextInput {...props} />;
    case "file":
      return (
        <FileInput {...props} accept="application/pdf">
          <FileField source="src" title="title" />
        </FileInput>
      );
    default:
      return <TextInput {...props} />;
  }
};

export default ValueInput;
