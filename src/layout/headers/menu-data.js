const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Services",
    link: "/service",
    sub_menus: [
      { link: "/structural-steel", title: "Structural Steel Detailing" },
      { link: "/connection-design", title: "Connection Design and Stamping" },
      { link: "/design-analysis", title: "Design Analysis" },
      { link: "/estimation", title: "Estimation" },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Projects",
    link: "/portfolio",
  },
  // {
  //   id: 4,
  //   mega_menu: true,
  //   has_dropdown: true,
  //   pages:true,
  //   title: "Pages",
  //   link: "#",
  //   mega_menus: [
  //     // layout 01
  //     {
  //       link: "#",
  //       title: "layout 1",
  //       layout: [
  //         { link: "/about-me", title: "About Me" },
  //         { link: "/about", title: "About Us v.1" },
  //         { link: "/about-2", title: "About Us v.2" },
  //         { link: "/about-3", title: "About Us v.3" },
  //       ],
  //     },
  //     // layout 02
  //     {
  //       link: "#",
  //       title: "Layout 2",
  //       layout: [
  //         { link: "/service", title: "Service v.1" },
  //         { link: "/service-2", title: "Service v.2" },
  //         { link: "/service-3", title: "Service v.3" },
  //         { link: "/service-details", title: "Service Details" },
  //         { link: "/faq", title: "Faq Page" },
  //       ],
  //     },
  //     // layout 03
  //     {
  //       link: "#",
  //       title: "Layout 3",
  //       layout: [
  //         { link: "/portfolio", title: "Portfolio v.1" },
  //         { link: "/portfolio-2", title: "Portfolio v.2" },
  //         { link: "/portfolio-3", title: "Portfolio v.3" },
  //         { link: "/portfolio-4", title: "Portfolio v.4" },
  //         { link: "/portfolio-5", title: "Portfolio v.5" },
  //         { link: "/portfolio-details", title: "portfolio details" },
  //       ],
  //     },
  //     // layout 04
  //     {
  //       link: "#",
  //       title: "Layout 4",
  //       layout: [
  //         { link: "/team", title: "Team" },
  //         { link: "/team-2", title: "Team v.2" },
  //         { link: "/team-details", title: "Team Details" },
  //         { link: "/job", title: "Job" },
  //         { link: "/job-details", title: "job details" },
  //       ],
  //     },
  //     // layout 05
  //     {
  //       link: "#",
  //       title: "Layout 5",
  //       layout: [
  //         { link: "/price", title: "Price & Plans" },
  //         { link: "/privacy-policy", title: "privacy policy" },
  //         { link: "/terms", title: "Terms & Condition" },
  //         { link: "/help", title: "Help Center" },
  //       ],
  //     },
  //     // layout 06
  //     {
  //       link: "#",
  //       title: "Layout 6",
  //       layout: [
  //         { link: "/search", title: "Search Results" },
  //         { link: "/contact", title: "Contact" },
  //         { link: "/shop", title: "Shop" },
  //         { link: "/shop-details", title: "Shop Details" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Blog",
  //   link: "/blog",
  //   sub_menus: [
  //     { link: "/blog", title: "Blog" },
  //     { link: "/blog-list", title: "Blog List" },
  //     { link: "/blog-details", title: "Blog Details" },
  //   ],
  // },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Careers",
    link: "/job",
  },
];
export default menu_data;
