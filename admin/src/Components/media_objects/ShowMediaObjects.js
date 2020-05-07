import React from "react";
import {
  Show,
  SimpleShowLayout,
  useShowController,
  TopToolbar,
  DeleteButton,
} from "react-admin";
import DisplayMedia from "../shared/DisplayMedia";

const ShowMediaObjects = (props) => {
  const { record } = useShowController(props);

  if (record === undefined) {
    return null;
  }

  return (
    <Show actions={<MyShowActions />} {...props}>
      <SimpleShowLayout>
        <DisplayMedia mediaId={record.id} />
      </SimpleShowLayout>
    </Show>
  );
};

const MyShowActions = ({ basePath, data, resource }) => {
  return (
    <TopToolbar>
      <DeleteButton basePath={basePath} record={data} resource={resource} />
    </TopToolbar>
  );
};

export default ShowMediaObjects;
