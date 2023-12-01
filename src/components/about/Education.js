import React from 'react'
import "./Education.css"
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className="education">
        <div className="education-item">
                <div className="education-icon">
                        <FaGraduationCap />
                </div>
                <p className="education-duration">
                    Sept 2020 - Dec 2023
                 </p>
                <h5>Univeristy of Wisconsin-Madison</h5>
                <p>
                    <strong>Major:</strong> Computer Science <br/>
                    <strong>GPA:</strong> 3.80 <br/>
                </p>
        </div>
        <div className="education-item">
                <div className="education-icon">
                        <FaGraduationCap />
                </div>
                <p className="education-duration">
                    Jan 2023 - May 2023
                 </p>
                <h5>Danish Institute for Study Abroad (DIS) - Copenhagen</h5>
                <p>
                    <strong>Specialty:</strong> AI and Neural Networks <br/>
                    <strong>GPA:</strong> 3.80 <br/>
                </p>
        </div> 
    </div>
  )
}

export default Education
