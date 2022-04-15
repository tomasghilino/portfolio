import React from 'react';
import Carrousel from '../Ui/Carrousel';
import Animation from '../Ui/Animation';

import {
  ProjectsContainer,
  ProjectTitle,
  ProjectSubtitle,
} from './ProjectsElements';
const Projects = () => {
  return (
    <ProjectsContainer>
      <Animation direction="up" duration={1}>
        <ProjectTitle>Mis Proyectos</ProjectTitle>
      </Animation>
      <Animation direction="up" duration={1} delay={0.5}>
        <ProjectSubtitle>
          No están todos, recomiendo ver mi GitHub.
        </ProjectSubtitle>
      </Animation>

      <Carrousel />
    </ProjectsContainer>
  );
};

export default Projects;
