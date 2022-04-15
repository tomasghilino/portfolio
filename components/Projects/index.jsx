import React, { useState, useEffect } from 'react';
import Carrousel from '../Ui/Carrousel';

import {
  ProjectsContainer,
  ProjectTitle,
  ProjectSubtitle,
} from './ProjectsElements';
const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectTitle>Mis Proyectos</ProjectTitle>
      <ProjectSubtitle>
        No están todos, recomiendo ver mi GitHub.
      </ProjectSubtitle>

      <Carrousel />
    </ProjectsContainer>
  );
};

export default Projects;
