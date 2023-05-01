import service_data from '@/src/data/service-data';
import Link from 'next/link';
import React from 'react';


const service_details_content = {
    title: "Modeling for Accurate Estimation",
    desctiption: <>At Steelcube, we utilize the latest technology and software such as SDS/2 and Tekla Structure (X-steel) to create detailed 3D models for steel structure estimation. 
    These models allow us to extract various scope lists, Advance Bill of Material (ABM), and KISS reports with essential information once the job is awarded.</>,
    phone: "785 680 659 00 ",
}
const {title, desctiption, phone}  = service_details_content

const ServiceDetailsArea = () => {
    return (
        <>
            <div className="tp-sv-detials-area pt-120 pb-120">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-lg-12">
                  <div className="tp-sv-details-serive-left wow tpfadeUp">
                     <div className="row">

                        {
                            service_data.slice(16, 20).map((item, i)  => 
                            <div key={i} className="col-lg-6">
                            <div className="sv-detials-sv-item mb-30">
                               <div className="sv-detials-sv-item__icon">
                                  <span><i className={item.icon}></i></span>
                                  {/* <!-- flaticon-analytics --> */}
                               </div>
                               <h3 className="sv-detials-sv-item__title"><Link href="#"> {item.title}</Link></h3>
                               <span className="counter-number">{item.counter}</span>
                            </div>
                         </div>
                            
                            )
                        }
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-12">
                  <div className="tp-sv-details-serive-left mr-10 ml-40 wow tpfadeUp" data-wow-delay=".3s">
                     <div className="section-title-wraper">
                        <div className="tp-section">
                           <h2 className="tp-section__title mb-25">{title}</h2>
                           <p className="mb-0 pb-25">{desctiption}</p>
                        </div>
                     </div>
                     <div className="tp-sv-about-cta d-flex align-items-center mb-30">
                        <span className="call-icon"><i className="fas fa-phone"></i></span>
                        <p className="mb-0">
                           <span>Phone number</span> <br />
                           <b><a href={`callto:${phone}`}>{phone}</a></b>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    );
};

export default ServiceDetailsArea;