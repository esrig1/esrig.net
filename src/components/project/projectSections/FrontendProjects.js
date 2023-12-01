import React from 'react'
import ProjectBox from '../ProjectBox'
import "./XYZProjects.css"

const FrontendProjects = () => {
  const techStackImages1 = [
      <img src='/TechStackIcons/react.svg' alt='React' />,
  ];

  const techStackImages2 = [
    <img src='/TechStackIcons/css-3.svg' alt='CSS' />,
    <img src='/TechStackIcons/html-5.svg' alt='HTML' />,
    <img src='/TechStackIcons/mysql.svg' alt='MySQL' />,
    <img src='/TechStackIcons/php.svg' alt='PHP' />

];

const techStackImages3 = [
  <img src='/TechStackIcons/css-3.svg' alt='HTML' />,
  <img src='/TechStackIcons/html-5.svg' alt='CSS' />,
  <img src='/TechStackIcons/javascript.svg' alt='JavaScript' />,

];


  return (
    <div className='project-container'>
     <h1>Frontend Projects</h1> 
    <div className='project-boxes'>
      <ProjectBox
        title="This Website! (esrig.net 2.0)"
        description="This website is a responsive website written to showcase my programming and software
        Engineering history. It is periodicall updated such that it remains consistant with my current 
        knowledge"
        demoLink="https://example.com/project1-demo"
        techStackImages={techStackImages1}
      />
      <ProjectBox
        title="Harvard IAT Remake"
        description="This project I created in my coding ethics class, where we studied the impact code and algorithms can have on
        your implicit bias. This website is a reboot of Harvard's Implicit Association Test, where your attitudes and beliefs towards
        certain groups are measured based on a survey"
        demoLink="https://example.com/project1-demo"
        techStackImages={techStackImages2}
      />
      <ProjectBox
        title="esrig.net 1.0"
        description="The first iteration of my personal portfolio, that was created without the use of any external libraries. It only
        utilizes the main 3 frontend languages, which was a great learning experiences with familiarizing myself with the basics of 
        frontend"
        demoLink="https://example.com/project1-demo"
        techStackImages={techStackImages3}
      />
    </div>
    </div>
    

  )
}

export default FrontendProjects
