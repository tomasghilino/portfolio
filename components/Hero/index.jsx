import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';

import {
  HeroContainer,
  HeroPresentation,
  HeroDescription,
  HeroTitle,
  HeroText,
} from './HeroElements';

import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroPresentation>
          <HeroDescription>
            <HeroTitle
              as={motion.h1}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
            >
              Tomás Ghilino
            </HeroTitle>
            <HeroText
              as={motion.p}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 1.1 }}
            >
              Web Developer
            </HeroText>
          </HeroDescription>
          <Image src="/images/coding.svg" height={500} width={500} />
        </HeroPresentation>

        <svg
          css={css`
            position: absolute;
            bottom: 0;
            height: auto;
            width: 100%;
          `}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="var(--dark)"
            fillOpacity="1"
            d="M0,192L60,202.7C120,213,240,235,360,208C480,181,600,107,720,106.7C840,107,960,181,1080,186.7C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </HeroContainer>
    </>
  );
};

export default Hero;
