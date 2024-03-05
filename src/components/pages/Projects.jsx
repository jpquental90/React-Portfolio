import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projectsData.json';
import Project from '../components/Project';

// Projects page:
// Must render six instances of the Project component dynamically
// Be sure to store your project details data in a JSON file and import it into your project

const Projects = () => {
  const { projectId } = useParams(); // Assuming you have a route parameter for the selected project

  // If a specific project is selected, render only that project; otherwise, render all projects
  const renderProjects = projectId
    ? [projectsData.find((project) => project.id === projectId)]
    : projectsData;

  return (
    <div>
      <h1>Projects Page</h1>
      {renderProjects.map((project) => (
        <Project key={project.id} projectData={project} />
      ))}
    </div>
  );
};

export default Projects;