import React from 'react'
import ProjectBox from '../ProjectBox'
import "./XYZProjects.css"

const FrontendProjects = () => {
  const techStackImages1 = [
      <img key="1" src='/TechStackIcons/spring.svg' alt='Spring Framework' />,
      <img key="2" src='/TechStackIcons/spring.svg' alt='Spring Framework' />,
      <img key="3" src='/TechStackIcons/spring.svg' alt='Spring Framework' />,
      <img key="4" src='/TechStackIcons/spring.svg' alt='Spring Framework' />

  ];

  const techStackImages2 = [
    <img key="1" src='/TechStackIcons/spring.svg' alt='Spring Framework' />,
    <img key="2" src='/TechStackIcons/kubernetes.svg' alt='Spring Framework' />,
    <img key="3" src='/TechStackIcons/spring.svg' alt='Spring Framework' />,
    <img key="4" src='/TechStackIcons/java.svg' alt='Spring Framework' />,
    <img key="4" src='/TechStackIcons/java.svg' alt='Spring Framework' />
];

const techStackImages3 = [
  <img key="4" src='/TechStackIcons/java.svg' alt='Spring Framework' />,
  <img key="4" src='/TechStackIcons/java.svg' alt='Spring Framework' />
];


  return (
    <div className='project-container'>
     <h1>Frontend Projects</h1> 
    <div className='project-boxes'>
      <ProjectBox
        title="Project 1"
        description="A description of Project 1."
        demoLink="https://example.com/project1-demo"
        techStackImages={techStackImages1}
      />
      <ProjectBox
        title="Project 2"
        description="A description of Project 1."
        demoLink="https://example.com/project1-demo"
        techStackImages={techStackImages2}
      />
      <ProjectBox
        title="Project 3"
        description="A description of Project adfjlad;sfjasdkf;kljasdj;fka;sjdfjasdadfadsfasdff"
        demoLink="https://example.com/project1-demo"
        techStackImages={techStackImages3}
      />
    </div>
    </div>
    

  )
}

export default FrontendProjects
