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

  @media (max-width: 860px) {
    flex-direction: column-reverse;
    padding: 0;
  }
`;

export const HeroDescription = styled.div`
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: 400;
  display: inline-block;
  text-align: center;

  border-bottom: 0.1rem solid var(--pink);
  padding-bottom: 10px;
  color: var(--darkPink);

  @media (max-width: 381px) {
    font-size: 4rem;
  }
`;

export const HeroText = styled.p`
  font-size: 2.2rem;
  text-align: center;
  font-weight: 200;
  color: var(--pink);
  margin-top: 2rem;
`;

export const HeroCTA = styled.a`
  text-align: center;
  font-weight: 300;
  font-size: 2rem;
  color: var(--yellow);
  border-radius: 2rem;
  width: 90%;

  display: inline-block;
  font-family: 'Roboto', sans-serif;

  background-color: var(--dark);
  margin: 2rem 0 4rem 0;
  padding: 2rem;

  box-shadow: -6px 12px 14px -7px rgba(190, 7, 204, 0.43);
  -webkit-box-shadow: -6px 12px 14px -7px rgba(190, 7, 204, 0.43);
  -moz-box-shadow: -6px 12px 14px -7px rgba(190, 7, 204, 0.43);

  border: 2px solid var(--pink);

  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 2.4rem;
    padding: 1.3rem;
  }
`;

export const HeroWaves = styled.div``;
