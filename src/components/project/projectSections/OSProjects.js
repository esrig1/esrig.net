import React from 'react'
import ProjectBox from '../ProjectBox'
import "./XYZProjects.css"

const OSProjects = () => {
    return (
        <div className='project-container'>
         <h1>OS Projects</h1> 
        <div className='project-boxes'>
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
        </div>
        
    
      )
}

export default OSProjects
