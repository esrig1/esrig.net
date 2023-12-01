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
                    Feb 2023
                 </p>
                <h5>Incoming Software Engineer<span> - Kohl's Technology</span></h5>
                    <ul>
                        <li>Coming Soon!</li>
                    </ul>
                </div>

                <div className="timeline-item">
                    <div className="tl-icon">
                        <FaBriefcase/>
                    </div>
                    <p className="tl-duration">
                        August 2023 - December 2023
                    </p>
                    <h5>UW-Madison CS Capstone Co-op<span> - LastLock</span></h5>
                    <ul>
                        <li>Acted as Scrum Master on a student development team, overseeing sprint planning, facilitating
                        stand-ups, and fostering collaboration to enhance project efficiency</li>
                        <li>Developed backend algorithms in Swift to handle building and in-room navigation from data derived from Apple’s RoomPlan API.</li>
                        <li>Met with stakeholders weekly to discuss progression and evolving specifications for the end product</li>
                        <li>As a team, successfully created a full stack IOS app prototype that will be deployed to production in the future</li>
                        
                    </ul>
                    
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <FaBriefcase/>
                    </div>
                    <p className="tl-duration">
                        June 2023 - August 2023
                    </p>
                    <h5>Software Engineer Intern<span> - Kohl's Technology</span></h5>
                    <ul>
                        <li>Worked on the Rewards Team, which oversees the Kohl's Rewards Program and Credit Card</li>
                        <li>Built Java Spring proudction apps that rewarded bonus Kohl's Cash to users, giving ~3 million dollars monthly</li>
                        <li>Implemented parallelism to speed up month end rewards processes by 80%</li>
                        <li>Implemented RESTful APi endpoints to reprimand users utilizing the rewards program fraudulently</li>
                        <li>Leveraged Google Cloud and MongoDB to retrieve and modify reward account data, and implemented Kafka
                            messaging systems. Deployed applications using Openshift in LLE, Staging, and Prod environments.</li>
                        
                    </ul>
                    
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <FaBriefcase/>
                    </div>
                    <p className="tl-duration">
                        May 2022 - September 2022
                    </p>
                    <h5>The Odin Project</h5>
                    <ul>
                        <li>The Odin Project is a completely free, open source educational resource for learning web development</li>
                        <li>Took self-directed courses that taught beginniner and intermediate level HTML, CSS, and Javascript for web development.</li>
                        <li>Learned the basics of Ruby, and created various games and activities to bolster knowledge</li>
                        <li>My knowledge acquired through The Odin Project culminated in the creation of the first iteration of esrig.net, which
                            can be found on my projects page
                        </li>
                        
                        
                    </ul>
                    
                </div>
                
            </div>
  )
}

export default Timeline
