// ProjectBox.js
import React from 'react';
import './ProjectBox.css'; // Import your CSS file for styling

const ProjectBox = ({ title, description, demoLink, techStackImages }) => {
  return (
    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-box-link">
      <div className="project-box">
        <h2>{title}</h2>
        <p className='description'>{description}</p>
        <p className='technologies'><strong>Technologies:</strong></p>
        <div className="project-tech-stack">
          {techStackImages}
        </div>
      </div>
    </a>
  );
};

export default ProjectBox;
