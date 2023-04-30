import React from "react";
import SEO from "../common/seo";
import JobDetails from "../components/job-details";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Steelcube Engineering - Job Details"} />
      <JobDetails />
    </>
  );
};

export default index;
