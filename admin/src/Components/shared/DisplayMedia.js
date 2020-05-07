import React from "react";
import { useGetOne } from "react-admin";

const DisplayMedia = ({ mediaId }) => {
  const { data } = useGetOne("media_objects", mediaId);

  if (data === undefined) {
    return null;
  }

  var url = "";
  if (data.contentUrl !== undefined) {
    url = process.env.REACT_APP_API_ENTRYPOINT + data.contentUrl;
  }
  return url.split(".").pop() === "pdf" ? (
    <a href={url} target="blank">
      {data.contentUrl}
    </a>
  ) : (
    <>
      <span>{url}</span>
      <img class="fit-picture" src={url} style={{ margin: "1em" }} alt={url} />
    </>
  );
};

export default DisplayMedia;
