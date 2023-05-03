import React from 'react';


const feature_content_data = {
    title_one: "Key Services for Steel Structures Estimation",
    description: <>With our accurate and comprehensive 3D modeling, we ensure that our clients have a clear and precise 
    understanding of their project's requirements, timelines, and costs.    </>,
    list_one: [
        <>Customized Estimation Solutions</>,
        <>Accurate and Timely Estimation Reports</>,
        <>Expertise in SDS/2 and Tekla Structure</>,
        
    ],

    title_two: "Quality Assurance and Control",
    description_two: <>Quality Assurance and Control is an integral part of our services. We ensure the highest standards of 
    quality by adhering to industry best practices and standards. Our Quality Assurance and Control team works in tandem with 
    the project team to identify potential quality issues and take corrective measures to mitigate them. </>,
    items: [
        {
            id: 1,
            img: "/assets/img/icons/bulb-icon.png",
            title: "Rigorous quality check process"
        },
        {
            id: 2,
            img: "/assets/img/icons/tv-icon.png",
            title: "High-quality deliverables "
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