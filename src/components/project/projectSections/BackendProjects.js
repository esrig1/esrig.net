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
<img src='/TechStackIcons/css-3.svg' alt='HTML' />,
<img src='/TechStackIcons/html-5.svg' alt='CSS' />,
<img src='/TechStackIcons/javascript.svg' alt='JavaScript' />,

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
      description="If I could sit around all day and make personal projects, I would :)"
      demoLink="https://example.com/project1-demo"
      techStackImages={techStackImages3}
    />
  </div>
  </div>
  

)
}

export default BackendProjects
