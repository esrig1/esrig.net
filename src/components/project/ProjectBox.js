// ProjectBox.js
import React from 'react';
import './ProjectBox.css'; // Import your CSS file for styling

const ProjectBox = ({ title, description, demoLink, techStackImages }) => {

  const handleProjectBoxClick = () => {
    window.open(demoLink, '_blank');
  };

  return (
    <div className="project-box" onClick={handleProjectBoxClick}>
      <h2>{title}</h2>
      <p className='description'>{description}</p>
      <p className='technologies'><strong>Technologies:</strong></p>
      <div className="project-tech-stack">
        {techStackImages}
      </div>
    </div>
  );
};

export default ProjectBox;
