import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import HomeThree from "../components/homes/home-3";

const Home = () => {
  return (
    
    <Wrapper>
      <SEO pageTitle={"SteelCube Engineering"} />
       <HomeThree />
    </Wrapper>
  );
};

export default Home;
