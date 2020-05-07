import React from "react";
import {
  Show,
  SimpleShowLayout,
  useShowController,
  TopToolbar,
  DeleteButton,
} from "react-admin";

const ShowMediaObjects = (props) => {
  const { record } = useShowController(props);

  var url = "";
  if (record !== undefined) {
    url = process.env.REACT_APP_API_ENTRYPOINT + record.contentUrl;
  }

  return (
    <Show actions={<MyShowActions />} {...props}>
      <SimpleShowLayout>
        {url.split(".").pop() === "pdf" ? (
          <a href={url} target="blank">
            {record.contentUrl}
          </a>
        ) : (
          <>
            <span>{url}</span>
            <img
              class="fit-picture"
              src={url}
              style={{ margin: "1em" }}
              alt={url}
            />
          </>
        )}
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
