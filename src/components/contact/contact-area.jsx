import React from "react";

const contact_data = [
  // {
  //   id: 1,
  //   titel: "Become a client",
  //   email: "info@gencio-works.com",
  //   phone: "720.797.2031",
  //   tel: "78568065900",
  // },
  {
    id: 2,
    titel: "United States Office",
    email: "info@steelcubeeng.com",
    address: "30 N Gould St Ste R, Sheridan, WY, 82801",
    phone: "209 682 0710",
    tel: "2096820710",
  },
  {
    id: 3,
    titel: "India Office",
    email: "info@steelcubeeng.com",
    address: "KTC Illumination, Vittal Rao Nagar, HITEC City, Hyderabad, Telangana 500081",
    phone: "950 240 2484",
    tel: "9502402484",
  },
];

// contact_info
const contact_info = {
  img: "/assets/img/cta/contact-page-1.jpg",
  hi_text: "Welcome",
  title: <>At Steelcube Engineering, we bring your structural steel projects to life with precision and expertise. 
   </>,
};

const { img, hi_text, title } = contact_info;

const ContactArea = () => {
  return (
    <>
      <div className="contact-page-area pt-120 pb-90 wow tpfadeUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <div className="contact-img-1 pb-100 w-img">
                <img src={img} alt="" />
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <span className="say-hello">{hi_text}</span>
            </div>
            <div className="col-lg-10">
              <div className="tp-contact-page-info ">
                <h6 className="tp-section__title pb-60 mb-60 tp-border-bottom">
                  {title}
                </h6>
              </div>
              <div className="row">
                {contact_data.map((item, i) => (
                  <div key={i} className="col-lg-6">
                    <div className="contact-cta-item mb-30">
                      <h3>{item.titel}</h3> <br />
                      <a href={`mailto:${item.email}`}>{item.email}</a> <br />
                      <a >{item.address}</a> <br />
                      <a href={`tel:${item.tel}`}>{item.phone}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
