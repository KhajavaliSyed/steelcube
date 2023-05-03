import React from "react";

const MapArea = () => {
  return (
    <>
      <div className="tp-contact-map p-relative">
        <div>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.167611283454!2d-106.95747832334632!3d44.79777267765574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a6d206b%3A0x1887ab0668b2495c!2s30%20N%20Gould%20St%20Suite%20R%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sin!4v1683130621824!5m2!1sen!2sin"
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
