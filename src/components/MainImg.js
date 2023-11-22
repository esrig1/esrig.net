import "./MainImg.css";

import React from 'react'
import IntroImg from "../assets/logo192.png"

const MainImg = () => {
  return ( 
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg"/>
            </div>
        </div>
  );
}

export default MainImg
