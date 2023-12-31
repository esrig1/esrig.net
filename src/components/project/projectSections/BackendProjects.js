import React from 'react'
import ProjectBox from '../ProjectBox'
import "./XYZProjects.css"

const BackendProjects = () => {
  const techStackImages1 = [
    <img src='/TechStackIcons/swift.svg' alt='React' />,
];

const techStackImages2 = [
  <img src='/TechStackIcons/tensorflow.svg' alt='CSS' />,
  <img src='/TechStackIcons/jupyter.svg' alt='CSS' />,
];

const techStackImages3 = [
<img src='/TechStackIcons/idk.png' alt='idk' />,

];


return (
  <div className='project-container'>
   <h1>Algorithm/AI Projects</h1> 
  <div className='project-boxes'>
    <ProjectBox
      title="Building Pathfinding"
      description="This algorithm was created during my time working with LastLock, where one of my contributions was creating a building 
      navigation algorithm. This algorithm is utilized in conjunction with data retrived from Apple's roomplan in USDZ format, however this
      program isn't responsible for parsing that data"
      demoLink="https://github.com/esrig1/In-Room-Pathfinding"
      techStackImages={techStackImages1}
    />
    <ProjectBox
      title="Gotta Generate Em' All"
      description="Group project created during time studying abroad using GANs to generate new Pokémon images. The process involved dataset collection, data augmentation, and defining TensorFlow models for the generator and discriminator. 
      Early results showcased the significance of data augmentation in achieving promising outcomes for this creative AI endeavor."
      demoLink="https://medium.com/@joshua.esrig/using-gans-to-generate-pokemon-ae4f2b12b265"
      techStackImages={techStackImages2}
    />
    <ProjectBox
      title="Coming Soon!"
      description="Please do not click on this box it's not done yet. I'm asking very nicely."
      demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      techStackImages={techStackImages3}
    />
  </div>
  </div>
  

)
}

export default BackendProjects
