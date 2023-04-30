import Link from 'next/link';
import React from 'react';


const about_content_2  ={
    img: "/assets/img/about/ab-about-img.jpg",
    title: <>Your one-stop shop for structural steel detailing.</>,
    description: <>steelcubeeng.com is the leading structural steel detailing 
                  and design firm that offers a comprehensive range of services 
                  for both domestic and international customers. <br /> 
                <br />
                Our team of more than 80+ detailers are highly trained, 
                experienced and well-versed in the latest industry standards. 
                They are managed by our experienced project supervisors who 
                make sure that every project is completed with precision and 
                accuracy.
                </>
}
const {img, title, description}  = about_content_2


const AboutPageAbout = () => {
    return (
      <>
        <div className="about-page-about pt-120 pb-90">
          <div className="container">
            <div className="row align-items-md-center">
              <div className="col-xl-6 wow tpfadeUp">
                <div className="about-page-about-img mb-30">
                  <img src={img} alt={title} />
                </div>
              </div>
              <div className="col-xl-6 wow tpfadeUp">
                <div className="about-page-ab">
                  <div className="section-title-wraper">
                    <div className="tp-section">
                      <h2 className="tp-section__title mb-30">{title}</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="about-page-ab-btn-wrapper mb-30 wow tpfadeUp">
                    <Link href="/service" className="tp-btn">
                      Our Services
                      <span>
                        <i className="fal fa-long-arrow-right"></i>
                        <i className="fal fa-long-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default AboutPageAbout;