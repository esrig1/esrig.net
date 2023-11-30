import "./MainImg.css";

import React from 'react'
import IntroImg from "../../assets/EsrigPompeii.png"
import {Link} from "react-router-dom"
import Typed from "typed.js";

const MainImg = () => {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Software Engineer', 'Problem Solver', 'Critical Thinker', 'Developer', 'Tech Enthusiast'],
          typeSpeed: 100,
          backSpeed: 50, // Adjust the backspacing speed
          startDelay: 500, // Optional delay before typing starts
          backDelay: 1500, // Optional delay before backspacing starts
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
                <p>Hey, I'm Josh</p>
                <h1>A <span ref={el} /></h1>
                <div className="buttons">
                <Link to="/project" className = "btn">Projects</Link>
                <a href="/JoshuaEsrigResume.pdf" download="JoshuaEsrigResume.pdf" className='btn'>Resume</a>
                </div>
            </div>
        </div>
  );
}

export default MainImg
