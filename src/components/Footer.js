import React from 'react'
import "./Footer.css"
import {FaGithub, FaHome, FaLinkedin, FaMailBulk} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='footer-personal-info'>
                  <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                  <div>
                    <p>Madison, Wisconsin</p>
                  </div>
                </div>
                <div className='footer-personal-info'>
                  <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                      <p>joshua.esrig@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='right'>
              <h4>About This Website</h4>
              <p>Hey, thanks for visiting the second iteration of my website!
                I've put this together to show off my projects and work experiences, 
                and to gain experience with React and SQL.
              </p>
              <div className='socials'>
                <a href="https://github.com/esrig1" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='social'/>
                </a>
                <a href="https://www.linkedin.com/in/esrig/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='social'/>
                </a>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Footer
