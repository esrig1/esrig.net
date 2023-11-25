import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProjectHero from '../components/OtherImg'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHero heading="Projects" text="Some of my recent work" />
      <Footer/>
    </div>
  )
}

export default Project
