import React from 'react';
import { FaGithub } from 'react-icons/fa';  // Import GitHub icon from react-icons
import './project.css';

const Project = ({ projectData }) => {
  const { title, deployedLink, video, githubLink, screenshot } = projectData;

  // Determine which link to use for the title click (priority: deployedLink > video)
  const linkToUse = deployedLink || video;

  return (
    <div className="card col-md-5 d-flex justify-content-center card-project">
      <img src={screenshot} alt={`${title} Screenshot`} className="project-image" />
      
      {/* Overlay Title: Make the title clickable */}
      <div className="overlay">
        <h3 className="project-title">
          {linkToUse ? (
            <a href={linkToUse} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
      </div>

      {/* Card Body with GitHub icon link */}
      <div className="card-project-body">
        {githubLink && (
          <p>
            {/* GitHub Icon that links to the repository */}
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="github-icon" />
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Project;