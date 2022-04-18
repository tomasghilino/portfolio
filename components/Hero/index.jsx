import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';

import {
  HeroContainer,
  HeroPresentation,
  HeroDescription,
  HeroTitle,
  HeroText,
  HeroCTA,
} from './HeroElements';

import Animation from '../Ui/Animation';

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
              transition={{ duration: 1.2 }}
            >
              Tomás Ghilino
            </HeroTitle>
            <HeroText
              as={motion.p}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Web Developer
            </HeroText>
            <HeroCTA
              as={motion.a}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.6 }}
              href="/WebDeveloper.pdf"
              download
            >
              Download CV
            </HeroCTA>
          </HeroDescription>
          <Animation direction="down" duration={1}>
            <Image src="/images/coding.svg" height={500} width={500} />
          </Animation>
        </HeroPresentation>

        <div>
          <img
            src="/images/footerSvg.png"
            alt="footer"
            css={css`
              width: 100%;
              position: absolute;
              bottom: 0;
              z-index: -1;
              display: block;
            `}
          />
        </div>
      </HeroContainer>
    </>
  );
};

export default Hero;
