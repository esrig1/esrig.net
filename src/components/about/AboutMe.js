import React from 'react';
import myImage from '../../assets/EsrigPompeii.jpg';
import './AboutMe.css';
import {FaGithub, FaLinkedin} from "react-icons/fa"


const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="image-container">
        <div className='background-shape'></div>
        <img src={myImage} alt="Myself" />
      </div>
      <div className="description-container">
        <h1>About Me</h1>
        <p>
          Hello! My name is Joshua Esrig, and I am a passionate software engineer with a love for full stack development.
          I thrive most when working on Agile teams creating meaningful, cutting edge software. In my free time, you 
          can find me exploring new technologies or working on personal coding projects. 
        </p>
        <div className='about-button-container'>
            <a href="/JoshuaEsrigResume.pdf" download="JoshuaEsrigResume.pdf" className='btn'>Resume</a>
            <a href="https://github.com/esrig1" target="_blank" rel="noopener noreferrer">
                <FaGithub className='social'/>
            </a>
            <a href="https://www.linkedin.com/in/esrig/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='social'/>
            </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
