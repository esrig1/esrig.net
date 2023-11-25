import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AboutHero from "../components/OtherImg"
import Timeline from '../components/Timeline'

const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutHero heading="About Me" text="My History as a Developer"/>
      <Timeline/>
      <Footer/>
    </div>
  )
}

export default About
