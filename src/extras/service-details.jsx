import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Steelcube Engineering - Service Details"} />
      <ServiceDetails />
    </>
  );
};

export default index;
