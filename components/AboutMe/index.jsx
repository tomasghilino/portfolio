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
              Hi, i'm Tomás Ghilino. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa, minima in?
            </AboutMeText>
            <AboutMeText>
              Commodi quasi ratione similique consequatur consectetur aut, ea
              quam delectus.
            </AboutMeText>
          </AboutMeTextContainer>
        </AboutMeItemsContainer>
      </AboutMeItems>
    </AboutMeContainer>
  );
};

export default AboutMe;
