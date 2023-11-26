import React from 'react'
import "./Timeline.css"
import {FaBriefcase} from "react-icons/fa"


const Timeline = () => {
  return (

    <div className="timeline">
            <div className="timeline-item">
                <div className="tl-icon">
                        <FaBriefcase/>
                </div>
                <p className="tl-duration">
                    May 2022 - present
                 </p>
                <h5>Programming Tutor<span> - Diamond Tutoring</span></h5>
                    <p>
                        Diamond Tutoring is a completely virtual tutoring company that acts as a middleman between tutors and students in need.
                        I create individual tutoring curriculums adapted specifically for each of my students' age and skill level.
                        Scratch and Java are the primary languages that I tutor to my students.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <FaBriefcase/>
                    </div>
                    <p className="tl-duration">
                        May 2022 - September 2022
                    </p>
                    <h5>The Odin Project</h5>
                    <p>
                        The Odin Project is a completely free, open source educational resource for anybody trying to improve
                        their programming skills. Through The Odin Project, I was taught the complexities of the Ruby programming
                        language in addition to the 3 frontend languages needed for web development. Much of the knowledge I
                        gained culminated to the creation of this website! 
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <FaBriefcase/>
                    </div>
                    <p className="tl-duration">
                        February 2021 - March 2022
                    </p>
                    <h5>Student Videographer<span> - UW-Madison CS Department</span></h5>
                    <p>
                        Conceptualized and created various promotional content for the school of Computer Sciences, with the end goal of 
                        creating excitement for the viewer. In addition to this, I collaborated with other videographers and social media managers to assemble the most optimal final product for 
                        consumption. This was facilitated by discussion in weekly meetings to boost productivity on current projects.
                    </p>
                    
                </div>
                    <div className="timeline-item">
                        <div className="tl-icon">
                            <FaBriefcase/>
                        </div>
                        <p className="tl-duration">
                            January 2019 - August 2020
                        </p>
                        <h5>Programming Tutor<span> - Code Ninjas</span></h5>
                        <p>
                            Code Ninjas is a franchised brick and mortar tutoring location that teaches children programming. As an employee, 
                            I Structured and facilitated the education of children aged 7-14 in the basics of JavaScript, HTML, and Scratch.
                            In addition, I Engaged in significant amounts of self-learning of various programming languages, to better understand and 
                            instruct students. Lastly, I formulated directed lesson plans with other instructors to assist students in better understanding the material, 
                            leading to greater success. 
                        </p>
                    </div>
            </div>
  )
}

export default Timeline
