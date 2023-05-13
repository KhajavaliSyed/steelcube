import React from "react";


// service_data
const service_data = [
  {
    id: 1,
    counter: "01",
    title: <> Structural <br /> Steel </> ,
    des:  <>Our end-to-end steel structural detailing services adhere to AISC, NISD, CISC and ASTM standards.</>,
    delay: ".4s",
    list_item: [
      "Engineering, Design and Analysis",
      "Detailing and Estimation",
      "Material take-off"
    ],
  },
  {
    id: 2,
    counter: "02",
    title: <> Connection <br /> Design </> ,
    des: <>Our structural steel connection design services are available to fabricators and builders across the globe.</> ,
    delay: ".5s",
    list_item: [
      "Structural Connection Drawings",
      "Structural Analysis",
      "Designs as per Standards"
    ],
  },
  {
    id: 3,
    counter: "03",
    title:  <> Accurate <br /> Estimation </> ,
    des:  <>We utilize the latest technology to create detailed 3D models for steel structure estimation.</>,
    delay: ".5s",
    list_item: [
      "Understanding of requirements",
      "Comprehensive 3D modeling",
      "SDS/2 and Tekla Structure"
    ],
  },
];



const ServiceArea = () => {
  return (
    <>
      <div className="tp-da-service-area pt-110 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper text-center mb-60">
                <div className="tp-section">
                  <span className="tp-section__subtitle mb-15 shadow-none text-grey p-0 wow tpfadeUp ">
                    Our Services
                  </span>
                  <h1
                    className="tp-section__title mb-30 wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Services We <span>Provide</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {service_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6">
                <div
                  className="da-service pr-30 pl-30 mb-30 wow tpfadeUp"
                  data-wow-delay=".4s"
                >
                  <div className="d-flex justify-content-between align-items-center mb-15">
                    <h3 className="da-service__title ">{item.title}</h3>
                    <div className="da-service__counter">{item.counter}</div>
                  </div>
                  <div className="da-service__list-box white-bg">
                    <p>{item.des}</p>
                    <ul>
                      {item.list_item.map((list, i) => (
                        <li key={i}>
                          {list}
                          <span>
                            <i className="fal fa-check"></i>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
