import React from 'react';
import { useParams } from 'react-router-dom';
import groupProjectsData from '../data/groupProjectsData.json';
import individualProjectsData from '../data/individualProjectsData.json'; 
import Project from '../components/Project';

const Projects = () => {
  const { projectId } = useParams();

  // Determine which set of projects to render based on the route parameter
  const renderProjects = projectId ? [individualProjectsData.find((project) => project.id === projectId)] : individualProjectsData;

  return (
    <div className="projects-wrapper row justify-content-center main-content ">
      {/* <h2 class="project-type">Individual Projects</h2> */}
      {renderProjects.map((project) => (
        <Project key={project.id} projectData={project} />
      ))}
      <h2 class="project-type">Group Projects</h2>
      {groupProjectsData.map((project) => (
        <Project key={project.id} projectData={project} />
      ))}
    </div>
  );
};

export default Projects;