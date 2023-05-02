import React from "react";

const MapArea = () => {
  return (
    <>
      <div className="tp-contact-map p-relative">
        <div>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3907005194965!2d78.37991457384987!3d17.441004401260937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e1bef1173f%3A0xedf7c46288fdf31a!2sKTC%20Illumination%2C%20Vittal%20Rao%20Nagar%2C%20HITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1682958131984!5m2!1sen!2sin"
              style={{ border: "0px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <div className="contact-map-img">
          <img src="/assets/img/cta/contact-map-logo.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default MapArea;
