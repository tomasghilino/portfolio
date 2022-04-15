import styled from '@emotion/styled';

export const FooterContainer = styled.div`
  height: 350px;
  background-color: var(--dark);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 0;
    padding-bottom: 2rem;
  }
`;

export const FooterLogoWrapper = styled.div``;
export const FooterLogo = styled.h1`
  color: #dfdfdf;
  font-size: 3rem;
`;

export const FooterSubtitle = styled.p`
  color: #cbe025;
  font-size: 1.5rem;
`;

export const FooterDataWrapper = styled.div`
  margin: 0 auto;
  @media (min-width: 768px) {
    flex: 1;
  }
`;
export const FooterItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.4rem;
  align-items: center;

  margin-bottom: 2rem;
  margin-top: 2rem;

  svg {
    color: white;
    font-size: 2rem;
    margin-right: 1rem;
  }
`;
export const FooterText = styled.p`
  color: white;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.4rem;
  align-items: center;
  justify-content: space-between;
  color: white;

  a {
    text-decoration: none;

    &:visited {
      color: white;
    }
  }

  svg {
    font-size: 5rem;
    cursor: pointer;
  }
`;
