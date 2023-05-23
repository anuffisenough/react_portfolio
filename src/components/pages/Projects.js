import React from 'react';
import ProjectList from '../ProjectList';
import projects from '../../projects';

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
}
