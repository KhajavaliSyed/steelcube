import React from "react";
// social_links
const social_links = [
  {
    link: "https://www.linkedin.com/company/steelcube-engneering-pvt-ltd/",
    target: "_blank",
    icon: "fab fa-linkedin",
    name: "LinkedIn",
  },
  {
    link: "https://www.instagram.com/steelcube_engineering/",
    target: "_blank",
    icon: "fab fa-instagram",
    name: "Instagram",
  },
  {
    link: "https://www.facebook.com/Steelcubeeng",
    target: "_blank",
    icon: "fab fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "https://twitter.com/SteelcubeLtd",
    target: "_blank",
    icon: "fab fa-twitter",
    name: "Twitter",
  },
  
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((item, i) => (
        <a key={i} target="_blank" rel="noopener" href={item.link}>
          <i className={item.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;


const social_links_home_two = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "http://twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",
    name: "Twitter",
  },
  {
    link: "https://www.behance.com/",
    target: "_blank",
    icon: "fab fa-behance",
    name: "Behance",
  },
  {
    link: "https://www.youtube.com/",
    target: "_blank",
    icon: "fab fa-youtube",
    name: "Youtube",
  },
  {
    link: "https://www.linkedin.com/en/",
    target: "_blank",
    icon: "fab fa-linkedin",
    name: "Linkedin"
  }
];

export const SocialLinksHomeTwo = () => {
  return (
    <>
      {social_links_home_two.map((item, i) => (
        <a key={i} target="_blank" rel="noopener" href={item.link}>
          <i className={item.icon}></i>
        </a>
      ))}
    </>
  );
};

 