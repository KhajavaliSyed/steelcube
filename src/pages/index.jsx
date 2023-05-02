import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import HomeEight from "../components/homes/home-8";
import HomeThree from "../components/homes/home-3";
// import {
//   NovuProvider,
//   PopoverNotificationCenter,
//   NotificationBell,
// } from '@novu/notification-center';

const Home = () => {
  return (
    
    <Wrapper>
      {/* <NovuProvider subscriberId={'on-boarding-subscriber-id-123'} applicationIdentifier={'ruQAvf46cpvM'}>
      <PopoverNotificationCenter colorScheme={'light'}>
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider> */}
      <SEO pageTitle={"SteelCube Engineering"} />
       <HomeThree />
    </Wrapper>
  );
};

export default Home;
