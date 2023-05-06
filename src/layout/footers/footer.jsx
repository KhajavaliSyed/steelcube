import SocialLinks from '@/src/common/social-links';
import Link from 'next/link';
import React, { useState } from 'react';
import CommonFooter, { FooterCopyRight } from './common-footer';
import { color } from 'framer-motion';

// footer_links data
const footer_links = [
   {
      id: 1,
      title: "Company",
      col: "col-xl-3",
      id: "company",
      links: [
         {title: "About", link: "/about"},
         {title: "Affiliates", link: "/faq"},
         {title: "Careers", link: "/job"},
         {title: "Legal & Privacy", link: "#"},
         {title: "Our Team", link: "/team"},
         {title: "Refund Policy", link: "#"},
         {title: "Terms & Rules", link: "/terms"},
         {title: "Get In Touch", link: "/contact"},
         {title: "other", link: "/"},
      ]
   },
   {
      id: 2,
      title: "Services",
      col: "col-xl-2",
      id: "",
      links: [
         {title: "Business Consultancy", link: "/"},
         {title: "Web Development", link: "/"},
         {title: "UI & UX Design", link: "/"},
         {title: "Legal & Privacy", link: "/privacy-policy"},
         {title: "Engine Optimization", link: "/"},
         {title: "Digital marketing", link: "/"},
      ]
   },
   
]

const footer_content ={
   footer_logo: "/assets/img/logo/sc-logo.png",
   about: "About Us",
   about_des: <>Welcome to Steelcube Engineering, your trusted partner in structural engineering design. We specialize in providing high-quality services to fabricators and builders who need reliable structural steel connection design solutions.</>,
   phone_icon: "/assets/img/footer/call-icon.png",
   address: <> 30 N Gould St Ste R, Sheridan, WY, 82801</>,
   phone: <> 209 682 0710</>,
   
}

const {footer_logo, about, about_des, phone_icon ,address, phone} = footer_content


const Footer = ({tp_border}) => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
      e.preventDefault();
      await fetch("api/addContact", {
      body: JSON.stringify({
        "email": email,
      }),
      headers: {
        "content-type": "application/json"
      },
      method: "POST"
      }).then(response => response.json()).then(response => console.log(response)).catch(err => console.error(err));
    
      await fetch("api/sendEmail", {
      body: JSON.stringify({toName: 'Subscriber',
      toEmail: email, 
      fromName: 'Steelcube Engineering',
      fromEmail: 'info@steelcubeeng.com',
      message: 'Thank you for Subscribing to Steelcube ENgineering. We will get back to you soon',
      subject: 'Welcome to Steelcube Engineering'}),
      headers: {
          "content-type": "application/json"
      },
      method: "POST"
      }).then(response => response.json()).then(response => console.log(response)).catch(err => console.error(err));
  
    }
    return (
      <>
        <footer>
          <div className={`bs-footer ${tp_border && "tp-border-top"}`}>
            <div className="container">
              <div className="bs-footer__top fotter-btn-bottom pt-100 pb-40 d-none d-md-block">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="bs-footer__top-logo">
                      <a href="#">
                        <img src={footer_logo} alt="brand-logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-6 text-md-end">
                    <div className="bs-footer__top-social">

                     <SocialLinks />
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="bs-footer__main pb-10 pt-80 tp-border-bottom">
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-footer__widget mb-40">
                      <h3 className="tp-footer__widget-title mb-35">{about}</h3>
                      <p className="pr-40">{about_des}</p>
                    </div>
                    <div className="tp-footer-cta d-flex align-items-center">
                      
                      <b>
                        
                        <span className="d-block mb-0"><i className="fas fa-location-dot" color='#ecc322'></i>{address}</span>
                        
                          <span className="call-icon">
                            {/* <img src={phone_icon} alt="" /> */}
                            <i className="fas fa-phone" color='#ecc322'></i>
                          </span>
                          <a href={`callto: ${phone}`}> Call Us: {phone}</a>
                        
                      </b>
                    </div>
                  </div>
                  {/* Coommon Footer start */}
                  <CommonFooter />
                  {/* Coommon Footer end */}

                  <div className="col-xl-3 col-md-6">
                    <div className="tp-footer__widget bs-pl-60 mb-40">
                      <h3 className="tp-footer__widget-title mb-35">
                        Subscribe Now
                      </h3>
                      <p>Subscribe to get the latest news from us</p>

                      <div className="tp-footer-from p-relative">
                        <form onSubmit={handleSubmit}>
                          <span>
                            <i className="fas fa-envelope-open"></i>
                          </span>
                          <input type="email" name="email" id ="email" required placeholder="Enter your mail" onChange={e => setEmail(e.target.value)}/>
                          <button type="submit">
                            <i className="fas fa-paper-plane"></i> <b></b>
                          </button>
                        </form>
                      </div>
                      <p className="tp-form-note p-0 mt-5 mb-30">
                        
                        <span>**</span>We are not going to save your data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* footer copy right start */}
              <FooterCopyRight/>
              {/* footer copy right end */}
            </div>
          </div>
        </footer>
      </>
    );
};

export default Footer;