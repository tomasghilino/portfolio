import React, { useState, useEffect } from 'react';
import Carrousel from '../Ui/Carrousel';

import { ProjectsContainer, ProjectTitle } from './ProjectsElements';
const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectTitle>Mis Proyectos Favoritos</ProjectTitle>

      <Carrousel />
    </ProjectsContainer>
  );
};

export default Projects;
