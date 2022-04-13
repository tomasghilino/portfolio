import styled from '@emotion/styled';

export const TechContainer = styled.div`
  padding: 3rem;
`;

export const TechTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 400;
  color: var(--darkPink);
  margin: 4rem 0 4rem 0;
  text-align: center;
  width: 100%;

  padding: 1rem;
  display: inline-block;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const TechGrid = styled.div`
  position: relative;
  display: grid;
  max-width: 1000px;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 768px) {
    margin: 0 auto;
    grid-template-columns: repeat(5, 1fr);
  }
`;
