import React from "react";

import {
  AboutMeContainer,
  AboutMeTextContainer,
  AboutMeText,
  AboutMeItems,
  AboutMeItemsContainer,
  Img,
} from "./AboutMeElements";

import Animation from "../Ui/Animation";

import ProfilePic from "../../public/images/yo.jpg";

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
                Curso Lic. Sistemas en la UNGS y actualmente estoy trabajando en{" "}
                <a href="https://exchangecopter.com">
                  <span>Exchange Copter</span>
                </a>{" "}
                , un broker de criptomonedas. Nivel avanzado de Inglés (C1
                Advanced).
              </AboutMeText>
              <AboutMeText>
                Portfolio diseñado y programado
                <span> 100% por mi </span>
                (pronto voy a rediseñarlo con mis conocimientos actuales) .
              </AboutMeText>
            </Animation>
          </AboutMeTextContainer>
        </AboutMeItemsContainer>
      </AboutMeItems>
    </AboutMeContainer>
  );
};

export default AboutMe;
