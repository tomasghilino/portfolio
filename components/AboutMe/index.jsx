import React from 'react';

import {
  AboutMeContainer,
  AboutMeTextContainer,
  AboutMeText,
  AboutMeItems,
  AboutMeItemsContainer,
  Img,
} from './AboutMeElements';

import Animation from '../Ui/Animation';

import ProfilePic from '../../public/images/yo.jpg';

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeItems>
        <AboutMeItemsContainer>
          <Animation direction="up" duration={1}>
            <div>
              <Img src={ProfilePic} alt="foto" />
            </div>
          </Animation>

          <AboutMeTextContainer>
            <Animation direction="up" duration={1} delay={0.7}>
              <AboutMeText>
                Hola, soy <span>Tomás Ghilino</span>. Me gusta la tecnología,
                los desafíos y aprender cosas nuevas todo el tiempo.
              </AboutMeText>
              <AboutMeText>
                Curso Lic. Sistemas en la UNGS, nivel alto de inglés y me estoy
                especializando en Desarrollo Web de forma autodidacta.
              </AboutMeText>
              <AboutMeText>
                Portfolio diseñado y programado
                <span> 100% por mi</span>.
              </AboutMeText>
            </Animation>
          </AboutMeTextContainer>
        </AboutMeItemsContainer>
      </AboutMeItems>
    </AboutMeContainer>
  );
};

export default AboutMe;
