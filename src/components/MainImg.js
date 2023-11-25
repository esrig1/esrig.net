import "./MainImg.css";

import React from 'react'
import IntroImg from "../assets/logo192.png"
import {Link} from "react-router-dom"

const MainImg = () => {
  return ( 
        <div className="hero">
            <div className="img">
                <img className="hero-img" src={IntroImg} alt="IntroImg"/>
            </div>
            <div className="content">
                <p>Hey, I'm Josh</p>
                <h1>Software Engineer</h1>
                <div>
                <Link to="/project" className = "btn">Projects</Link>
                <Link to="/contact" className = "btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
  );
}

export default MainImg
