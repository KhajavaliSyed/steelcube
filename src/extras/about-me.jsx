import React from "react";
import SEO from "../common/seo";
import AboutMe from "../components/about-me";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Steelcube Engineering - About Me"} />
      <AboutMe />
    </>
  );
};

export default index;
