import React from 'react';

import { TechContainer, TechTitle, TechGrid } from './TechnologiesElements';
import GridCard from '../Ui/GridCard';

import { css } from '@emotion/react';

const Technologies = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#242444"
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,165.3C672,149,768,139,864,165.3C960,192,1056,256,1152,256C1248,256,1344,192,1392,160L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <TechContainer>
        <TechTitle>Tecnologías</TechTitle>

        <TechGrid>
          <GridCard src="/images/react.png" title="React.js" />
          <GridCard src="/images/next.png" title="Next.js" />
          <GridCard src="/images/gatsby.png" title="Gatsby" />
          <GridCard src="/images/graphql.png" title="GraphQL" />
          <GridCard src="/images/nodeJs.png" title="Node.js" />
          <GridCard src="/images/htmlcss.png" title="HTML / CSS" />
          <GridCard
            src="/images/styledcomponents.png"
            title="Styled Components"
          />
          <GridCard src="/images/sasslogo.png" title="SASS" />
          <GridCard src="/images/java.png" title="Java" />
          <GridCard src="/images/gitlogo.png" title="Git / GitHub  / GitLab" />
        </TechGrid>

        <TechTitle>También tengo conocimientos en</TechTitle>
        <TechGrid
          css={css`
            @media (min-width: 768px) {
              margin: 0 auto;
              grid-template-columns: repeat(4, 1fr) !important;
            }
          `}
        >
          <GridCard src="/images/datocms.png" title="DatoCMS" />
          <GridCard src="/images/firebase.png" title="Firebase" />
          <GridCard src="/images/mongodb.png" title="MongoDB / Atlas" />
          <GridCard src="/images/photoshop.png" title="Photoshop" />
        </TechGrid>
      </TechContainer>
    </>
  );
};

export default Technologies;
