import styled from '@emotion/styled';
import Image from 'next/image';

export const AboutMeContainer = styled.div`
  background-color: var(--dark);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutMeTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 400;
  color: white;
  margin: 2rem 0 2rem 0;

  box-shadow: -6px 12px 14px -7px rgba(190, 7, 204, 0.43);
  -webkit-box-shadow: -6px 12px 14px -7px rgba(190, 7, 204, 0.43);
  -moz-box-shadow: -6px 12px 14px -7px rgba(190, 7, 204, 0.43);

  padding: 2rem;
  display: inline-block;

  border: 2px solid var(--pink);

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const AboutMeItems = styled.div`
  padding: 2rem;
  transform: scale(0.9);
  @media (min-width: 970px) {
    margin: auto 10rem;
  }
`;

export const AboutMeItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AboutMeTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const AboutMeText = styled.p`
  color: white;
  font-size: 2rem;
  text-align: center;
  line-height: 1.4;
  margin-bottom: 2rem;

  span {
    color: var(--bright);
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Img = styled(Image)`
  border-radius: 50%;
  box-shadow: -6px 12px 14px -7px rgba(190, 7, 204, 0.43);
  -webkit-box-shadow: -6px 12px 14px -7px rgba(190, 7, 204, 0.43);
  -moz-box-shadow: -6px 12px 14px -7px rgba(190, 7, 204, 0.43);
  transform: scale(0.8);
`;
