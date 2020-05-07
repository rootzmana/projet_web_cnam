import React from "react";
import {
  Show,
  SimpleShowLayout,
  useShowController,
  TextField,
  RichTextField,
} from "react-admin";
import DisplayMedia from "../shared/DisplayMedia";

const ShowConstants = (props) => {
  const { record } = useShowController(props);

  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="key" />
        <TextField source="type" />
        {displayValueForType(record)}
      </SimpleShowLayout>
    </Show>
  );
};

function displayValueForType(record) {
  if (record !== undefined) {
    switch (record.type) {
      case "img":
      case "file":
        return <DisplayMedia mediaId={record.file} />;
      case "html":
        return <RichTextField source="value" />;
      case "plain":
        return <TextField source="value" />;
      default:
        return null;
    }
  } else {
    return null;
  }
}

export default ShowConstants;
