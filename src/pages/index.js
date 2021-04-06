import * as React from "react";

import LandingView from "../components/LandingView/LandingView";
import "./../styles/global.css";
import "@fontsource/montserrat";
// markup
const IndexPage = () => {
  return (
    <div>
      <LandingView />
      <a href="resume.pdf">Resume</a>
    </div>
  );
};

export default IndexPage;
