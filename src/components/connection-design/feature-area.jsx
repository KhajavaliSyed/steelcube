import React from 'react';


const feature_content_data = {
    title_one: "Key Services for Connection Design",
    description: <>Our key services for structural steel connection design include structural connection drawings, 
    analysis, and designs to meet industry standards such as ASD, LRFD etc. Our experienced team also provides detailed calculations with complete reports.</>,
    list_one: [
        <>Expert Structural Steel Connection Design Services</>,
        <>Innovating for Better Work Processes and Deliverables</>,
        <>Supporting tables, connection sketches, and calculation reports</>,
        
    ],

    title_two: "Customized Solutions for your projects",
    description_two: <>We have a dedicated team to replicate the client’s environment. 
    Our Project-Specific Engagement works as per predefined scope, schedules, terms & price. 
    Our Time & Material model is best suited for uncertain scope and volume, repetitive work.</>,
    items: [
        {
            id: 1,
            img: "/assets/img/icons/bulb-icon.png",
            title: "Stamped Calculations for Connections"
        },
        {
            id: 2,
            img: "/assets/img/icons/tv-icon.png",
            title: "Special Connections to Meet Requirements"
        },
    ],
}

const {title_one, description, list_one,  title_two, description_two, items}  = feature_content_data

const FeatureArea = () => {
    return (
        <>
        <div className="tp-sv-page-feature-area black-bg p-relative pt-120 pb-120">
         <div className="sv-page-fea-img-1" 
         style={{backgroundImage: `url(/assets/img/services/sv-page-fea-img-1.jpg)`}}
         ></div>
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="tp-sv-fea-ab-content mr-60">
                     <div className="section-title-wraper">
                        <div className="tp-section">
                           <h2 className="tp-section__title text-white mb-25 wow tpfadeUp">{title_one}</h2>
                           <p className="mb-0 pb-55 wow tpfadeUp" data-wow-delay=".3s">{description}</p>
                        </div>
                     </div>
                     <div className="tp-ha-about-fea tp-sv-fea-list wow tpfadeUp" data-wow-delay=".4s">
                        <ul>
                            {list_one.map((list, i)  =>  <li key={i}><span><i className="fal fa-check"></i></span>{list}</li>)}
                        </ul>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="tp-sv-page-feature-area black-bg p-relative pt-120 pb-120">
         <div className="sv-page-fea-img-2" 
         style={{backgroundImage: `url(/assets/img/services/sv-page-fea-img-2.jpg)`}}
         ></div>
         <div className="container">
            <div className="row">
               <div className="col-lg-6 offset-lg-6" >
                  <div className="tp-sv-fea-ab-content ml-80">
                     <div className="section-title-wraper">
                        <div className="tp-section">
                           <h2 className="tp-section__title text-white mb-25 wow tpfadeUp">{title_two}</h2>
                           <p className="mb-0 pb-55 wow tpfadeUp" data-wow-delay=".3s">{description_two}</p>
                        </div>
                     </div>
                     <div className="sv-details-feature-wrapper">
                        <div className="row">

                            {items.map((item, i)  => 
                                <div key={i} className="col-md-6">
                              <div className="sv-details-fea-item wow tpfadeRight">
                                 <div className="sv-details-fea-item__icon mb-20">
                                    <img src={item.img} alt={item.title}/>
                                 </div>
                                 <h3 className="sv-details-fea-item__title">{item.title}</h3>
                                 <div className="sv-details-fea-item__arrow">
                                    <span><i className="fal fa-long-arrow-right"></i></span>
                                 </div>
                              </div>
                           </div>
                                )
                            }
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    );
};

export default FeatureArea;