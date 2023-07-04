import React from 'react';
// import projects from '../projects';

function ProjectList(props) {
  return (
        <div className="container">
          {/* <h1>Projects:</h1> */}
          <ul className="project-group">
            {props.projects.map((project) => (
              <li className="project-group-item" key={project.title}>
                {`${project.title} ${project.thumbnail} (${project.deployed_link}) (${project.github_repository})`}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default ProjectList;