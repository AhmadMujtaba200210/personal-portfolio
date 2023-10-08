import React from 'react'
import './frontend.css'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Stack</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxl-react skills__icon' ></i>
                   
                </div>   
                <div className="skills__data">
                <i class='bx bxl-flutter skills__icon'  ></i>

                </div>
                <div className="skills__data">
                <i class='bx bxl-typescript skills__icon' ></i>
                
                </div>
               
            </div>

            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxl-javascript skills__icon' ></i>
                  
                </div>
                <div className="skills__data">
                <i class='bx bxl-html5 skills__icon' ></i>
                    
                </div>
                <div className="skills__data">
                <i class='bx bxl-bootstrap skills__icon' ></i>

                </div>
               
            </div>

            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxl-css3 skills__icon' ></i>
                  
                </div>
                <div className="skills__data">
                <i class='bx bxl-wordpress skills__icon' ></i>
                    
                </div>
                <div className="skills__data">
                <i class='bx bxl-redux skills__icon' ></i>

                </div>
               
            </div>
        </div>
    </div>

  )
}

export default Frontend;
