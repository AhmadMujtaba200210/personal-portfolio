import React,{useState} from "react";
import "./services.css";

const Services = () => {
    const [toggleState,setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i Offer!</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="bx bxl-java services__icon"></i>
            <h3 className="services__title">Java Software Solutions</h3>
          </div>

          <span className="services__button" onClick={()=>toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          
          <div className={toggleState === 1 ? "services__modal active__modal":"services__modal"}>
            
            <div className="services__modal-content">
              <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Software Development</h3>
              <p className="services__modal-description">--insert--text</p>
              <ul className="services__modal-services grid">
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">RESTful APIs.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Custom Software Development
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Code Review and Optimization
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">MVP development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Integration Services.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Technical Writing</p>
                </li>
              
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
          <i class='bx bxs-data services__icon'></i>
            <h3 className="services__title">DataBase Solutions</h3>
          </div>

          <span onClick={()=>toggleTab(2)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 2 ? "services__modal active__modal":"services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Data Base</h3>
              <p className="services__modal-description">--insert--text</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">RESTful APIs.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Custom Software Development
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Code Review and Optimization
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">MVP development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Integration Services.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Technical Writing</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i class='bx bxl-python services__icon'></i>
            <h3 className="services__title">Automation Solutions</h3>
          </div>

          <span onClick={()=>toggleTab(3)} className="services__button" >
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 3 ? "services__modal active__modal":"services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Automation</h3>
              <p className="services__modal-description">--insert--text</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">RESTful APIs.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Custom Software Development
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Code Review and Optimization
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">MVP development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Integration Services.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Technical Writing</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
