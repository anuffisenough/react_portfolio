import React from 'react';

function Project({ projects }) {
  return (
        <div className="container">
          <h1>Projects:</h1>
          <ul className="project-group">
            {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
            {projects.map((project) => (
              <li className="project-group-itme" key={project.title}>
                {`${project.title} ${project.thumbnail} (${project.deployed_link}) (${project.github_repository})`}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Project;