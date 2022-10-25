import * as React from "react";
import Skills from "./modules/views/Skills";
import AppFooter from "./modules/views/AppFooter";
import AboutMe from "./modules/views/AboutMe";
import Projects from "./modules/views/Projects";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <AboutMe />
      <Projects />
      <Skills />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
