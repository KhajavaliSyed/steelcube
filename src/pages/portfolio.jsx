import React from "react";
import SEO from "../common/seo";
import Portfolio from "../components/portfolios/portfolio";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Steelcube Engineering - Portfolio"} />
      <Portfolio />
    </>
  );
};

export default index;
