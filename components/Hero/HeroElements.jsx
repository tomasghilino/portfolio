import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
`;

export const HeroPresentation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem;

  @media (max-width: 950px) {
    flex-direction: column-reverse;
  }
`;

export const HeroDescription = styled.div``;

export const HeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: 400;
  display: inline-block;
  text-align: center;

  border-bottom: 0.1rem solid #ececec;
  padding-bottom: 10px;
  color: var(--bright);

  @media (max-width: 381px) {
    font-size: 4rem;
  }
`;

export const HeroText = styled.p`
  font-size: 2.2rem;
  text-align: center;
  font-weight: 200;
  color: white;
  margin-top: 2rem;
`;

export const HeroWaves = styled.div``;
