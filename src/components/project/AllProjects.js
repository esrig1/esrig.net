import React from 'react'
import "./AllProjects.css"
import FrontendProjects from './projectSections/FrontendProjects'
import BackendProjects from './projectSections/BackendProjects'
import OSProjects from './projectSections/OSProjects'

const AllProjects = () => {
  return (
    <div className='project-sections'>
      <FrontendProjects/>
      <BackendProjects/>
      <OSProjects/>
    </div>
  )
}

export default AllProjects
