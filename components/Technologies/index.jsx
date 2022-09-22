import React from "react";

import { TechContainer, TechTitle, TechGrid } from "./TechnologiesElements";
import GridCard from "../Ui/GridCard";
import Animation from "../Ui/Animation";
import Experience from "../Experience";

import { css } from "@emotion/react";

const Technologies = () => {
  return (
    <>
      <div>
        <img
          src="/images/separatorTech.png"
          alt="footer"
          css={css`
            width: 100%;
            z-index: -1;
            display: block;
          `}
        />
      </div>

      <TechContainer>
        <Experience />
        <Animation direction="up" duration={1}>
          <TechTitle>Tecnologías</TechTitle>
        </Animation>
        <Animation direction="up" duration={1} delay={0.5}>
          <TechGrid>
            <GridCard
              src="/images/react.png"
              title="React / React Native (Expo)"
            />
            <GridCard src="/images/next.png" title="Next.js" />
            <GridCard src="/images/gatsby.png" title="Gatsby" />
            <GridCard src="/images/graphql.png" title="GraphQL" />
            <GridCard src="/images/nodeJs.png" title="Node.js" />
            <GridCard src="/images/Docker.png" title="Docker / DigitalOcean" />
            <GridCard
              src="/images/styledcomponents.png"
              title="Styled Components"
            />
            <GridCard src="/images/sasslogo.png" title="SASS" />
            <GridCard src="/images/java.png" title="Java" />
            <GridCard
              src="/images/gitlogo.png"
              title="Git / GitHub  / GitLab"
            />
          </TechGrid>
        </Animation>

        <Animation direction="up" duration={1}>
          <TechTitle>También utilizo</TechTitle>
        </Animation>
        <Animation direction="up" duration={1} delay={0.5}>
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
        </Animation>
      </TechContainer>
    </>
  );
};

export default Technologies;
