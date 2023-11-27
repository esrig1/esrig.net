import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProjectHero from '../components/OtherImg'
import ProjectBoxes from '../components/project/ProjectBoxes'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHero heading="Projects" text="Some of my recent work" />
      <ProjectBoxes/>
      <Footer/>
    </div>
  )
}

export default Project
