import React from 'react'
import ProjectBox from './ProjectBox'

const ProjectBoxes = () => {
  return (
    <div className='project-container'>
      <ProjectBox
        title="Project 1"
        description="A description of Project 1."
        technologies="React, Node.js, MongoDB"
        githubLink="https://github.com/example/project1"
        demoLink="https://example.com/project1-demo"
      />
      <ProjectBox
        title="Project 1"
        description="A description of Project 1."
        technologies="React, Node.js, MongoDB"
        githubLink="https://github.com/example/project1"
        demoLink="https://example.com/project1-demo"
      />
      <ProjectBox
        title="Project 1"
        description="A description of Project 1."
        technologies="React, Node.js, MongoDB"
        githubLink="https://github.com/example/project1"
        demoLink="https://example.com/project1-demo"
      />
    </div>
  )
}

export default ProjectBoxes
