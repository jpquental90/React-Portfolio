import React from 'react';
import { Link } from 'react-router-dom';
import './project.css'

// Project:
// Must be a reusable component that ingests JSON data as props and renders a single instance for each project
// Must utilize Router props to properly render the right project based on user selection
// Must render the following info:

// Project title
// Link to the deployed version
// Link to the GitHub repository
// GIF or screenshot of the deployed application

const Project = ({ projectData }) => {
  const { title, deployedLink, githubLink, screenshot } = projectData;

  return (
      <div className="card card-about col-md-5 col-sm-6 col-6 align-items-center project-cards" >
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <img src={screenshot} alt={`${title} Screenshot`} />
          <p>
            <strong>Deployment Link:</strong>{' '}
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">{deployedLink}</a>
          </p>
          <p>
            <strong>GitHub Repository:</strong>{' '}
            <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a>
          </p>
        </div>
      </div>
  );
};

export default Project;