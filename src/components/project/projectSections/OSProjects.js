import React from 'react'
import ProjectBox from '../ProjectBox'
import "./XYZProjects.css"

const OSProjects = () => {
  const techStackImages1 = [
    <img src='/TechStackIcons/c.svg' alt='C' />,
];

const techStackImages2 = [
  <img src='/TechStackIcons/c.svg' alt='C' />,
];

const techStackImages3 = [
<img src='/TechStackIcons/c.svg' alt='C' />,

];


return (
  <div className='project-container'>
   <h1>Algorithm/AI Projects</h1> 
  <div className='project-boxes'>
    <ProjectBox
      title="Cache"
      description="I created a C program to simulate a cache system using sets and lines to store data. The program reads the novel Alice in Wonderland into the system bus and from the cache, tracking hits and misses.
      I conducted various tests, initializing the cache differently each time to analyze cache performance in terms of hit count, miss count, and read data count under different scenarios."
      demoLink="https://github.com/esrig1/C_Cache"
      techStackImages={techStackImages1}
    />
    <ProjectBox
      title="Memory Allocator"
      description="
      The memory allocator I made manages dynamic memory allocation and deallocation. It allocates memory blocks according to requested sizes, making necessary adjustments to the block structure, 
      and frees up previously allocated blocks. It efficiently manages the allocation and deallocation process which optimizes resource utilization."
      demoLink="https://github.com/esrig1/C-Memory-Allocator"
      techStackImages={techStackImages2}
    />
    <ProjectBox
      title="LinkedList"
      description="Designed and implemented a linked list in C, providing functions for manipulation and analysis. The program includes operations like adding elements to the front and 
      back, popping elements from the front and back, checking for duplicates, and deleting specific elements. These functionalities are tested as well."
      demoLink="https://github.com/esrig1/C_Linked_List/"
      techStackImages={techStackImages3}
    />
  </div>
  </div>
  

)
}

export default OSProjects
