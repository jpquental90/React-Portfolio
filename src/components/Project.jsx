import React from 'react';
import { Link } from 'react-router-dom';
import './project.css'

const Project = ({ projectData }) => {
  const { title, deployedLink, video, githubLink, screenshot } = projectData;

  // Rendering the individual projects from projectsData.json into the Projects page using the same reusable code
  return (
    <div className="card col-md-5 d-flex justify-content-center card-project" >
      <div className="card-body">
        <h5 className="card-title project-title">{title}</h5>
        <img src={screenshot} alt={`${title} Screenshot`} className="project-image" />

        {/* Deployment and video links are only added if they exist */}
        {deployedLink && (
          <p>
            <strong><a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployment Link</a></strong>
          </p>
        )}
        {video && (
          <p>
            <strong><a href={video} target="_blank" rel="noopener noreferrer">Video Walkthrough</a></strong>
          </p>
        )}
        <p>
          <strong><a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a></strong>
        </p>
      </div>
    </div>
  );
};

export default Project;