// ProjectBox.js
import React from 'react';
import './ProjectBox.css'; // Import your CSS file for styling

const ProjectBox = ({ title, description, technologies, githubLink, demoLink }) => {
  return (
    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-box-link">
      <div className="project-box">
        <h2>{title}</h2>
        <p>{description}</p>
        <p><strong>Technologies:</strong> {technologies}</p>
        <div className="project-links">
          {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>}
        </div>
      </div>
    </a>
  );
};

export default ProjectBox;
