import React, { useState, useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AboutTitle from "./About/AboutTitle";
import AboutLeftPanel from "./About/AboutLeftPanel";
import AboutSkeleton from "./About/AboutSkeleton";
import AboutRightPanel from "./About/AboutRightPanel";

export default function AboutSection() {
  const [constants, setConstants] = useState();
  const [files, setFiles] = useState();

  async function fetchData() {
    const res = await fetch(
      process.env.REACT_APP_API_ENTRYPOINT + "/constants"
    );
    res.json().then((res) => setConstants(res));

    const files = await fetch(
      process.env.REACT_APP_API_ENTRYPOINT + "/media_objects"
    );
    files.json().then((res) => setFiles(res));
  }

  const matches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    fetchData();
  }, []);

  if (constants === undefined || files === undefined) {
    return <AboutSkeleton />;
  } else {
    const data = getDataForAboutSection(constants, files);
    return (
      <Fade in timeout={1000}>
        <Grid container>
          <AboutTitle
            title={data.About_MainTitle.value}
            subtitle={data.About_MainSubtitle.value}
          />
          <Box
            display="flex"
            width="100%"
            margin={matches ? "2em 7em 0 7em" : "2em"}
            flexDirection={matches ? "row" : "column"}
          >
            <AboutLeftPanel
              img={data.About_PhotoUrl.value}
              fb={data.About_UrlFacebook.value}
              insta={data.About_UrlInstagram.value}
              linkedin={data.About_UrlLinkedin.value}
              cv={data.About_UrlCv.value}
              title={data.About_PhotoTitle.value}
              subtitle={data.About_PhotoSubtitle.value}
            />
            <AboutRightPanel
              title={data.About_BioTitle.value}
              content={data.About_BioContent.value}
            />
          </Box>
        </Grid>
      </Fade>
    );
  }
}

const KEYS = [
  "About_MainTitle",
  "About_MainSubtitle",
  "About_BioTitle",
  "About_BioContent",
  "About_PhotoUrl",
  "About_PhotoTitle",
  "About_PhotoSubtitle",
  "About_UrlFacebook",
  "About_UrlInstagram",
  "About_UrlLinkedin",
  "About_UrlCv",
];

function getDataForAboutSection(array, files) {
  const constants = array["hydra:member"].filter((c) =>
    c.key.includes("About_")
  );
  var resObject = {};
  KEYS.forEach((key) => {
    const constant = constants.filter((c) => c.key === key);

    if (constant[0].file !== undefined) {
      const mediaObject = files["hydra:member"].filter((mediaObject) => {
        return mediaObject["@id"] === constant[0].file;
      });
      resObject[key] = {
        value: process.env.REACT_APP_API_ENTRYPOINT + mediaObject[0].contentUrl,
        type: constant[0].type,
      };
    } else {
      resObject[key] = {
        value: constant[0].value,
        type: constant[0].type,
      };
    }
  });
  return resObject;
}
