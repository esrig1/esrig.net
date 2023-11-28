import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProjectHero from '../components/OtherImg'
import AllProjects from '../components/project/AllProjects'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHero heading="Projects" text="Some of my recent work" />
      <AllProjects/>
      <Footer/>
    </div>
  )
}

export default Project
