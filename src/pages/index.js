import * as React from "react";

import LandingView from "../components/LandingView/LandingView";
import "./../styles/global.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/400.css";
import Projects from "../components/Projects/Projects";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Portfolio</title>
      <LandingView />
      <Projects />
    </main>
  );
};

export default IndexPage;
