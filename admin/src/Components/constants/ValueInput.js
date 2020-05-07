import React from "react";
import { TextInput } from "react-admin";
import RichTextInput from "ra-input-rich-text";
import InputGuesser from "@api-platform/admin/lib/InputGuesser";

const ValueInput = ({ type, ...props }) => {
  switch (type) {
    case "plain":
      return <TextInput source="value" {...props} />;
    case "img":
      return <InputGuesser source="file" {...props} />;
    case "html":
      return <RichTextInput source="value" {...props} />;
    case "file":
      return <InputGuesser source="file" {...props} />;
    default:
      return <TextInput source="value" {...props} />;
  }
};

export default ValueInput;
