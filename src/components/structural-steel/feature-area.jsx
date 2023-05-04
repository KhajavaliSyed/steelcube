import React from 'react';


const feature_content_data = {
    title_one: "Key Services for Design, Modeling, and Analysis",
    description: <>Our key services include everything from basic design concepts to detailed structure designs 
    and backup calculations. For structural and miscellaneous steel, we provide modeling and analysis services. </>,
    list_one: [
        <>Industry-Standard Adherence for Global Services</>,
        <>Expert Detailers for Accurate, Timely Services</>,
        <>Enhancing Steel Structural Design with Advanced Technology</>,
        
    ],

    title_two: "Customized Solutions for all your needs",
    description_two: <>To ensure that we meet your specific needs, we offer several different engagement models. 
    Our offshore delivery center provides a dedicated team to replicate your organization's environment. Alternatively, 
    you may prefer a project-specific engagement with predefined scope, schedules, terms, and price. 
    If you have uncertain scope and volume or need repetitive work, our time and material model allows you to pay as you go.</>,
    items: [
        {
            id: 1,
            img: "/assets/img/icons/bulb-icon.png",
            title: "Enhancing Steel Structural Design"
        },
        {
            id: 2,
            img: "/assets/img/icons/tv-icon.png",
            title: "Streamlining Your Workflow"
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