import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AboutHero from "../components/OtherImg"
import Timeline from '../components/about/Timeline'
import Education from "../components/about/Education"
import SectionHeader from '../components/SectionHeader'
import AboutMe from '../components/about/AboutMe'

const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutHero heading="About Me" text="My History as a Developer"/>
      <AboutMe/>
      <SectionHeader heading= "Education"/>
      <Education/>
      <SectionHeader heading = "Work Experience"/>
      <Timeline/>
      <Footer/>
    </div>
  )
}

export default About
