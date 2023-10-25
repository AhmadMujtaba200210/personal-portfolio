import React,{useState} from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 
                    ? "qualification__button qualification__active button--flex"
                    :"qualification__button button--flex"
                    }
                    onClick={()=>toggleTab(1)}
                    >
                    <i className="uil uil-graduation-cap qualification__icon">Education</i>{" "}
                </div>
                <div className={
                    toggleState === 2 
                    ? "qualification__button qualification__active button--flex"
                    :"qualification__button button--flex"
                    }
                    onClick={()=>toggleTab(2)}
                    >
                    <i className="uil uil-briefcase-alt qualification__icon">Experience</i>{" "}
                </div>
            </div>

            <div className="qualification__sections">
                <div className={
                    toggleState===1 
                ? "qualification__content qualification__content-active"
                :"qualification__content"}
                onClick={()=>toggleTab(1)}>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BS Computer Science</h3>
                            <span className="qualification__subtitle">Sir Syed CASE Institute of Technology, Islamabad</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2020 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Intermediate</h3>
                            <span className="qualification__subtitle">Cadet College Kallar Kahar</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2020 - Present
                            </div>
                        </div>
                    </div>

                </div>
                <div className={
                    toggleState===2 
                    ? "qualification__content qualification__content-active"
                    :"qualification__content"}
                    onClick={()=>toggleTab(2)}>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Software Engineer Intern</h3>
                            <span className="qualification__subtitle">BitNineGlobal</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>Aug 2023 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Software Engineer Intern</h3>
                            <span className="qualification__subtitle">NewBuffers</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>May 2022 - September 2022
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification;