import React from 'react';

import {
  FooterContainer,
  FooterLogo,
  FooterSubtitle,
  FooterText,
  FooterItemWrapper,
  SocialMedia,
  FooterLogoWrapper,
  FooterDataWrapper,
  FooterSlug,
} from './FooterElements';

import { css } from '@emotion/react';

//icons
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

//animation
import Animation from '../../Ui/Animation';

const Footer = () => {
  return (
    <>
      <div>
        <img
          src="/images/footerSvg.png"
          alt="footer"
          css={css`
            width: 100%;
            display: block;
          `}
        />
      </div>

      <FooterContainer>
        <Animation direction="up" duration={1}>
          <FooterLogoWrapper>
            <FooterLogo>Tomás Ghilino</FooterLogo>
            <FooterSubtitle>Web Developer</FooterSubtitle>
          </FooterLogoWrapper>
        </Animation>
        <FooterDataWrapper>
          <Animation direction="up" duration={1} delay={0.4}>
            <FooterItemWrapper>
              <EmailIcon />
              <FooterText>tomasghilino01@gmail.com</FooterText>
            </FooterItemWrapper>
          </Animation>

          <Animation direction="up" duration={1} delay={0.7}>
            <FooterItemWrapper>
              <PhoneIcon />
              <FooterText>+54 9 11 5329-7562</FooterText>
            </FooterItemWrapper>
          </Animation>

          <Animation direction="up" duration={1} delay={0.9}>
            <SocialMedia>
              <a
                href="https://www.linkedin.com/in/tomasghilino/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a href="https://github.com/tomasghilino" target="_blank">
                <GitHubIcon />
              </a>
              <a
                href="https://www.youtube.com/channel/UCZWwXphj5qWChYAVoPHGcAg"
                target="_blank"
              >
                <YouTubeIcon />
              </a>
            </SocialMedia>
          </Animation>
        </FooterDataWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
