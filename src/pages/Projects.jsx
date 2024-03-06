import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projectsData.json';
import Project from '../components/Project';


const Projects = () => {
  const { projectId } = useParams(); 

  const renderProjects = projectId
    ? [projectsData.find((project) => project.id === projectId)]
    : projectsData;

  return (
    <div className="projects-wrapper row justify-content-center main-content ">
      <h1>Projects</h1>
      {renderProjects.map((project) => (
        <Project key={project.id} projectData={project} />
      ))}
    </div>
  );
};

export default Projects;