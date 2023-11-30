import "./MainImg.css";

import React from 'react'
import IntroImg from "../../assets/EsrigPompeii.png"
import {Link} from "react-router-dom"
import Typed from "typed.js";
import {FaGithub, FaLinkedin} from "react-icons/fa"


const MainImg = () => {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Software Engineer', 'Problem Solver', 'Critical Thinker', 'Developer', 'Tech Enthusiast'],
          typeSpeed: 100,
          backSpeed: 50, // Adjust the backspacing speed
          startDelay: 500, // Optional delay before typing starts
          backDelay: 1000, // Optional delay before backspacing starts
          
          loop: true
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);

  return ( 
        <div className="hero">
            <div className="img">
                <img className="hero-img" src={IntroImg} alt="IntroImg"/>
            </div>
            <div className="content">
                <h2>Hey, I'm Josh</h2>
                <h1>A <span ref={el} /></h1>
                <h3>Quick Links</h3>
                <div className="buttons">
                    <a href="/JoshuaEsrigResume.pdf" download="JoshuaEsrigResume.pdf" className='btn'>Resume</a>
                    <a href="https://github.com/esrig1" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='social'/>
                    </a>
                    <a href="https://www.linkedin.com/in/esrig/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='social'/>
                    </a>
                </div>
                <p>Thanks for visiting my site! You can look around to see my programming history, in addition to 
                    some of my past work.
                </p>

                
            </div>
        </div>
  );
}

export default MainImg
