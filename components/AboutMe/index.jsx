import React from 'react';

import {
  AboutMeContainer,
  AboutMeTitle,
  AboutMeTextContainer,
  AboutMeText,
  AboutMeItems,
  AboutMeItemsContainer,
  Img,
} from './AboutMeElements';

import ProfilePic from '../../public/images/yo.jpg';

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeTitle>About Me</AboutMeTitle>
      <AboutMeItems>
        <AboutMeItemsContainer>
          <div>
            <Img src={ProfilePic} alt="foto" />
          </div>
          <AboutMeTextContainer>
            <AboutMeText>
              Hola, soy <span>Tomás Ghilino</span>. Me gusta la tecnología, los
              desafíos y aprender cosas nuevas todo el tiempo.
            </AboutMeText>
            <AboutMeText>
              Curso Lic. Sistemas en la UNGS, y me estoy especializando en
              Desarrollo Web de forma autodidacta.
            </AboutMeText>
            <AboutMeText>
              Este es mi portfolio, diseñado y programado
              <span> 100% por mi</span>.
            </AboutMeText>
          </AboutMeTextContainer>
        </AboutMeItemsContainer>
      </AboutMeItems>
    </AboutMeContainer>
  );
};

export default AboutMe;
