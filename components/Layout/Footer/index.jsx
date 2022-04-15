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
        <FooterLogoWrapper>
          <FooterLogo>Tomás Ghilino</FooterLogo>
          <FooterSubtitle>Web Developer</FooterSubtitle>
        </FooterLogoWrapper>
        <FooterDataWrapper>
          <FooterItemWrapper>
            <EmailIcon />
            <FooterText>tomasghilino01@gmail.com</FooterText>
          </FooterItemWrapper>
          <FooterItemWrapper>
            <PhoneIcon />
            <FooterText>+54 9 11 5329-7562</FooterText>
          </FooterItemWrapper>
          <SocialMedia>
            <a href="https://www.linkedin.com/in/tomasghilino/" target="_blank">
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
        </FooterDataWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
