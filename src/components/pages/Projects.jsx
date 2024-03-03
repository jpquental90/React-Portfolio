import React from 'react';

// Projects page:

// Must render six instances of the Project component dynamically

// Be sure to store your project details data in a JSON file and import it into your project

// Project:

// Must be a reusable component that ingests JSON data as props and renders a single instance for each project

// Must utilize Router props to properly render the right project based on user selection

// Must render the following info:

// Project title

// Link to the deployed version

// Link to the GitHub repository

// GIF or screenshot of the deployed application

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}

export default Projects;