import React from 'react';
import myImage from '../../assets/EsrigPompeii.png';
import './AboutMe.css';

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
          Hello! My name is [Your Name], and I am a passionate software engineer with a love for front-end development.
          I enjoy creating responsive and user-friendly interfaces. In my free time, you can find me exploring new technologies
          or working on personal coding projects. Let's build something amazing together!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
