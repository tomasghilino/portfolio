import React from 'react';
import { useQuery } from 'graphql-hooks';

const ProjectsQuery = `
  query MyQuery {
    allProyectos {
      id
      descripcion
      imagen {
        responsiveImage {
          src
          webpSrcSet
        }
      }
      titulo
      linkgithub
      linkdemo
    }
  }
`;
const useProjects = () => {
  const { loading, data } = useQuery(ProjectsQuery, {
    variables: {
      limit: 10,
    },
  });

  return { loading, data };
};

export default useProjects;
