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
            <h3 className="services__title">Enterprise Solutions</h3>
          </div>

          <span className="services__button" onClick={()=>toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          
          <div className={toggleState === 1 ? "services__modal active__modal":"services__modal"}>
            
            <div className="services__modal-content">
              <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Software Development</h3>
             
              <ul className="services__modal-services grid">
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">RESTful APIs</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">J2EE (Jakarta EE)
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">JPA & JDBC
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Spring and Spring Boot</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">GraphQL</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Microservices</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Multi Module Structures</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Maven/Gradle</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Unit/Integration Testing</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Spring MVC</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Spring Profiles</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Spring Security</p>
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
              
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Data Base Normalistation</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design Data Base Architecture
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Secure Data Solutions
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Custom SQL Queries</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">ACID (Atomicity, Consistency, Isolation, Durability)</p>
                </li>
               
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i class='bx bxl-aws services__icon'></i>
            
            <h3 className="services__title">Cloud Computing</h3>
          </div>

          <span onClick={()=>toggleTab(3)} className="services__button" >
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 3 ? "services__modal active__modal":"services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Cloud Computing Solutions</h3>
             
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Cloud Migration</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Docker Deployment
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Cloud Security
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">EC 2 Instances</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Elastic Bean Stalk</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">S3 Storage</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Digital Ocean Deployment</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Continous Deployment</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Overnight Deployment</p>
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
