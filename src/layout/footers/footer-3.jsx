import React, { useState } from 'react';
import CommonFooter, { FooterCopyRight } from './common-footer';


const footer_3_content ={
    subscribe: "Subscribe Now",
    title: "Subscribe to get the latest news from us"
}

const {subscribe, title} = footer_3_content;


const FooterThree = ({style_4}) => {
    const [email, setEmail] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("https://api.sendinblue.com/v3/contacts?limit=50&offset=0&sort=desc", {
        body: JSON.stringify({
          "email": email,
          "emailBlacklisted": false,
          "smsBlacklisted": false,
          "updateEnabled": false,
        }),
        headers: {
          "accept": "application/json",
          "api-key": "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",
          "content-type": "application/json"
        },
        method: "POST"
        }).then(response => response.json()).then(response => console.log(response)).catch(err => console.error(err));
      
        await fetch("https://api.sendinblue.com/v3/smtp/email", {
        body: JSON.stringify({
            htmlContent : "<html><body><img src=\"https://steelcube.vercel.app/assets/img/logo/sc-logo.png\"/><h1>Welcome to Steelcube Engineering</h1><p>Thank you for subscribing to Steelcube Engineering. We will get back to you soon.</p></body></html>",
            //textContent: message,
            to: [{"name": "Steelcube", "email": email}],
            sender: {"name" : "Steelcube Engineering", "email":"info@steelcubeeng.com"},
            replyTo: {"name" : "Steelcube Engineering", "email":"info@steelcubeeng.com"},
            subject: "Thank you for contacting Steelcube Engineering",
            message: "Thank you for contacting Steelcube Engineering"
        }),
        headers: {
            "accept": "application/json",
            "api-key": "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",
            "content-type": "application/json"
        },
        method: "POST"
        }).then(response => response.json()).then(response => console.log(response)).catch(err => console.error(err));
    
    }
    return (
        <>
    <footer>
        <div className={`bs-footer da-footer-bg ${style_4 ? "p-relative" : "da-footer"} `}>   
            <div className="container">
                <div className={`bs-footer__main pb-10 pt-80 ${style_4 ? "z-index-11 p-relative"  : ""}`}>  
                    <div className="row justify-content-center">
                        <CommonFooter />                     
                        <div className="col-xl-3 col-md-6">
                            <div className="tp-footer__widget mb-40">
                                <h3 className="tp-footer__widget-title mb-35">
                                    Get In Touch
                                </h3>
                                <div className="tp-footer-cta d-flex align-items-center mb-30">
                                    <span className="call-icon"><img src="/assets/img/footer/footer-rbg-call.png"
                                            alt="" /></span>
                                    <span>
                                         <span className="d-block mb-0">30 N Gould St Ste R, Sheridan, WY, 82801</span>
                                        <b><a href="callto:2096820710"> Call Us: 209 682 0710 </a></b>
                                    </span>
                                </div>
                                <div className="tp-footer-cta d-flex align-items-center mb-30">
                                    <span className="call-icon"><img src="/assets/img/footer/message-rgb-ison.png"
                                            alt="" /></span>
                                    <span>
                                        
                                        <b><a href="mailto:info@gencio.com"> info@steelcubeeng.com </a></b>
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-4 col-md-6">
                            <div className="tp-footer__widget bs-pl-60 mb-40">
                                <h3 className="tp-footer__widget-title mb-35">
                                     {subscribe}
                                </h3>
                                <p> {title}</p>

                                <div className="tp-footer-from mb-5 p-relative">
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
                                <p className="tp-form-note"> <span>**</span> We are not going to save your data </p>
                                {/* <div className="da-ft-social">
                                    <b> Connect Here:</b>
                                    <span> <a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                    <span> <a href="#"><i className="fab fa-twitter"></i></a></span>
                                    <span> <a href="#"><i className="fab fa-behance"></i></a></span>
                                    <span> <a href="#"><i className="fab fa-youtube"></i></a></span>
                                </div> */}
                            </div>
                        </div>


                    </div>
                </div>
                
                <FooterCopyRight style_3={true} />
               
            </div>
            {style_4 && <div className="bs-footer__circle d-none d-lg-block"></div>}   
        </div>

    </footer>
        </>
    );
};

export default FooterThree;